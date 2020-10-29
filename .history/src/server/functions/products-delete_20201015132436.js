import { serverClient } from '../db/_serverClient_';

import { getId } from './utils/getId';

export const handler = async (event, context) => {
  const id = getId(event.path);

  console.log(`Function 'products-delete' invoked... Deleting id: ${id}`);

  await serverClient.query(q.Delete(q.Ref(q.Collection('products'), id)))
    .then((res) => {
      console.log(`success`, res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    })
    .catch((err) => {
      console.log(`error`, err)
      return {
        statusCode: 400,
        body: JSON.stringify(err)
      }
    });
};
