import mongoose from 'mongoose';

const deprecationOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

export const connect = (url, options) => mongoose.connect(url, { ...deprecationOptions, ...options });
