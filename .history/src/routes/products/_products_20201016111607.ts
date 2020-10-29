import api from '../../server/db/api';

const products = async () => await api.getProducts();

export default products;
