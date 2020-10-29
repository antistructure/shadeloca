import { client } from '../database/client';

import { getId } from './utils/getId';

export const handler = async (event, context) => {
  const id = getId(event.path);

  console.log(`Function 'products-read' invoked. Getting id: ${id}`);

  return await queryDbServer(q.Collection(`products/${id}`))
    .then((res) => {
      console.log('success', res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    })
    .catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
};
