import { serverClient } from '../db/_serverClient_';

export const handler = async (event, context) => {
  const data = JSON.parse(event.body);
  console.log(`Product delete data:`, data);
  console.log(`Function 'products-delete-batch' invoked... Deleting ${data.ids}`);

  const deleteEachProduct = data.ids.map(id => q.Delete(q.Ref(q.Collection(`products`), id)));

  return serverClient.query(deleteEachProduct)
    .then(res => {
      console.log(`success`, res);
      return {
        statusCode: 200,
        body: JSON.stringify(res);
      }
    })
    .catch(err => {
      console.log(err);
      return {
        statusCode: 400,
        body: JSON.stringify(err)
      }
    });
};
