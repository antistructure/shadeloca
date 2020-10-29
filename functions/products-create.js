import { serverClient } from '../src/server/db/connect';

export async function handler(event, context) {
  console.log(`Function 'product-create' invoked`, event.body);

  return await serverClient.query(q.Create(q.Collection('products'), {data: JSON.parse(event.body)}))  
    .then(res => {
      console.log('success', res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      };
    })
    .catch((error) => {
      console.log('error', error);
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      };
    });
};
