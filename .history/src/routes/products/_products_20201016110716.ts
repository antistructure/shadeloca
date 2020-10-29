import api from '../../server/db/api';

const products = api.getProducts().then(res => res.text());

export default products;
