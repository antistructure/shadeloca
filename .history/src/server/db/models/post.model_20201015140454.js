import mongoose from 'mongoose';
import slug from 'slug';
import { returnVirtuals } from '../../db/utils/returnVirtuals';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true,
    maxlength: 3000
  },
  isFeatured: {
    type: Boolean,
    required: true,
    default: false
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "User"
  },
  // For "soft-deleting" (save in trash for certain time)
  isDeleted: {
    type: Boolean,
    required: true,
    default: false
  }
},
{ 
  timestamps: true 
});

// Use a function to utilize the "this" keyword for posts
// "this" refers to the instance of a post
postSchema.virtual("contentLength").get(() => this.html.length);

postSchema.pre("validate", next => {
  // TODO: validate that the provided slug is usable
  if (!this.slug) {
    this.slug = slug(this.title, {
      lower: true,
    });
  }
  // TODO: validate html
  next();
});

// Multiple posts with the same title for the same author are not allowed
postSchema.index(
  {
    author: 1,
    title: 1,
  },
  {
    unique: true,
  }
);

returnVirtuals(postSchema);

export const Post = mongoose.model("Post", postSchema);
