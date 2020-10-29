import api from '../../server/db/api';

const products = api.getProducts().then(res => res.text()).then(text => console.log(text));

export default products;
