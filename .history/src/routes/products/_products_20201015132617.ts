import api from '../../server/db/api.js

const products = api.getProducts().then(data => console.log(data));

export default products;
