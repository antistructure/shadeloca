import { serverClient } from '../src/server/db/connect';

export async function handler(event, context) {
  console.log(`event`, event);
  console.log(`context`, context);
  console.log(`Function 'products-read-all' invoked`);
  
  return serverClient.query(q.Paginate(q.Match(q.Index(`all_products`))))
    .then(res => {
      console.log(`Product refs`, res.data);
      console.log(`${res.data.length} products found`);
      
      const getEachProduct = res.data.map(ref => q.Get(ref));
      
      return serverClient.query(getEachProduct).then(res => {
        return {
          statusCode: 200,
          body: JSON.stringify(res)
        }
      })
    })
    .catch(error => {
      console.log(`There was an error while retrieving the all_products index.`, error)      
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    });
};
