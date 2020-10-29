import { serverClient } from '../db/connect';
import { getId } from './utils/getId';

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const id = getId(event.path);
  
  console.log(`Function 'products-update' invoked... Updating id: ${id}`);

  return await serverClient.query(q.Update(q.Ref(q.Collection(`products`), id), { ...data }))
    .then((res) => {
      console.log(`success`, res)
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    })
    .catch((error) => {
      console.log(`error`, error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
};
