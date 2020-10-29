import api from '../../server/db/api';

const products = api.getProducts().then(data => console.log(data));

export default products;
