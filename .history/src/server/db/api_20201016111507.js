import fetch from 'isomorphic-fetch';
// import { baseUrl } from '../functions/utils/baseUrl';

const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const baseUrl = dev ? 'http://localhost:3000' : 'https://www.shadeloca.com';

const createProduct = (data) => fetch(`${baseUrl}/.netlify/functions/products-create`, {
  method: 'POST',
  headers: {
    'authorization': process.env.FAUNADB_AUTH_HEADERS
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.catch(err => console.log(err));
  
const getProduct = id => fetch(`${baseUrl}/.netlify/functions/products-read/${id}`, {
  headers: {
    'authorization': process.env.FAUNADB_AUTH_HEADERS
  }
});

const getProducts = () =>
  fetch(`/src/server/functions/products-read-all.js`).then(res => res.json())
  .catch(err => console.log(err));

const updateProduct = (id, data) =>
  fetch(`${baseUrl}/.netlify/functions/products-update/${id}`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(err => console.log(err));

const deleteProduct = (id) =>
  fetch(`${baseUrl}/.netlify/functions/products-delete/${id}`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    }
  })
  .then(res => res.json())
  .catch(err => console.log(err));

const deleteProducts = ids =>
  fetch(`${baseUrl}/.netlify/functions/products-delete-batch`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    },
    body: JSON.stringify({
      ids: ids
    })
  })
  .then(res => res.json())
  .catch(err => console.log(err));

export default {
  createProduct: createProduct,
  getProduct: getProduct,
  getProducts: getProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  deleteProducts: deleteProducts
};
