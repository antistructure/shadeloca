import { serverClient } from '../db/_serverClient_';

export const handler = async (event, context) => {
  console.log(`Function 'product-create' invoked`, event.body);

  return await serverClient.query(q.Create(q.Collection('products'), {data: JSON.parse(event.body)}))  
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
