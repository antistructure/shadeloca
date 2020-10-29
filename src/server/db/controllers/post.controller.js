import { Post } from '../models/post.model';

const postByTitle = title => Post.findOne({ title }).exec();

export const postsForAuthor = (userId, skip = 0, limit = 10) => 
  Post.find({ author: userId }).skip(skip).limit(limit).exec();
  
export const getAuthorFromPost = async postId => {
  const match = await Post.findById(postId).populate('author').select('author').exec();
  return match.author;  
};

const fullPostById = id => Post.findById(id).populate('author').exec();

const allPostsSummary = (fieldsToSelect, skip = 0, limit = 10) =>
  Post.find({}).skip(skip).limit(limit).select(fieldsToSelect).exec();
  
const postByContentLength = (maxContentLength, minContentLength) =>
  Post.find({
    contentLength: {
      $gt: minContentLength,
      $lt: maxContentLength
    }
  })
  .exec(); 
