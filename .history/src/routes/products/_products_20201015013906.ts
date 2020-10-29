import api from '../../server/database/api.js';

const products = api.getProducts().then(data => console.log(data));

export default products;
