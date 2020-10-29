import jwt from 'jsonwebtoken';
import config from 'config';

import { User } from '../db/models/user.model';

const secret = config.get('jwtSecret');

/** 
 * Takes a User object, NOT A MONGOOSE DOCUMENT, and creates a JWT
 */

 // TODO: strip sensitive data so it doesn't go into the JWT
 export const createToken = user => jwt.sign(user, secret);

 const getUserFromToken = async token => {
   const jwtUser = jwt.verify(token, secret);
   const user = await User.findById(jwtUser.id).exec();
   return user.toObject();
 };

 export const getUserFromReqHeaders = async requestHeaders => {
   const token = requestHeaders.authorization || '';
   const user = await getUserFromToken(token);
   return user;
 };
