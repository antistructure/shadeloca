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
