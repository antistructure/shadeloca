import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { returnVirtuals } from '../../db/utils/returnVirtuals';

import { UserPermissions } from './user-permissions.model';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    default: "https://placekitten.com/300/300"
  },
  permissions: [UserPermissions]
},
{
  timestamps: true
});

// TODO: Validate a valid avatar
// userSchema.pre('validate', next => {
//   next();
// });

userSchema.pre('save', next => {
  if (!this.isModified('password')) {
    return next();
  }
  // TODO: Add salt from config?
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

userSchema.methods.checkPassword = enteredPassword => {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(enteredPassword, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }
      resolve(same);
    });
  });
};

returnVirtuals(userSchema);

export const User = mongoose.model('User', userSchema);
