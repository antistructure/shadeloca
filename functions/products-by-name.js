import { serverClient } from '../src/server/db/connect';

export async function handler(event, context) {
  console.log(context);
  const name = event.body.name;
  console.log(`Function 'products-read' invoked. Getting product: ${name}`);

  return await serverClient.query(q.Get(q.Match(q.Index(`products_by_name`), name)))
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
