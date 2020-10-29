import api from '../../server/db/api';

const products = api.getProducts().then(res => console.log(res));

export default products;
