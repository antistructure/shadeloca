import { serverClient } from '../db/_serverClient_';

import { getId } from './utils/getId';

export const handler = async (event, context) => {
  const id = getId(event.path);

  console.log(`Function 'products-read' invoked. Getting id: ${id}`);

  return await serverClient.query(q.Get(q.Ref(q.Collection(`products`), id)))
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
