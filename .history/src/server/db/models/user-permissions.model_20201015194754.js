import { Schema } from 'mongoose';

const userPermissionsSchema = new Schema({
  createPost: {
    type: Boolean,
    required: true,
    default: true
  },
  editOwnPost: {
    type: Boolean,
    required: true,
    default: true
  },
  editAnyPost: {
    type: Boolean,
    required: true,
    default: false
  },
  deleteOwnPost: {
    type: Boolean,
    required: true,
    default: true
  },
  deleteAnyPost: {
    type: Boolean,
    required: true,
    default: false
  },
  createProduct: {
    type: Boolean,
    required: true,
    default: true
  },
  editOwnProduct: {
    type: Boolean,
    required: true,
    default: true
  },
  editAnyProduct: {
    type: Boolean,
    required: true,
    default: false
  },
  deleteOwnProduct: {
    type: Boolean,
    required: true,
    default: true
  },
  deleteAnyProduct: {
    type: Boolean,
    required: true,
    default: false
  }
},
{
  timestamps: true
});

export const UserPermissions = mongoose.model('UserPermissions', userPermissionsSchema);
