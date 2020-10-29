import fetch from 'node-fetch';
import { baseUrl } from '../functions/utils/baseUrl';

const createProduct = (data) =>
  fetch(`/.netlify/functions/products-create`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json());
  
const getProduct = id =>
  fetch(`/.netlify/functions/products-read/${id}`, {
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    }
  });

const getProducts = () =>
  fetch(`/.netlify/functions/products-read-all`, {
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    }
  }).then(res => res.json());

const updateProduct = (id, data) =>
  fetch(`/.netlify/functions/products-update/${id}`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json());

const deleteProduct = (id) =>
  fetch(`/.netlify/functions/products-delete/${id}`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    }
  })
  .then(res => res.json());

const deleteProducts = ids =>
  fetch(`/.netlify/functions/products-delete-batch`, {
    method: 'POST',
    headers: {
      'authorization': process.env.FAUNADB_AUTH_HEADERS
    },
    body: JSON.stringify({
      ids: ids
    })
  })
  .then(res => res.json());

export default {
  createProduct: createProduct,
  getProduct: getProduct,
  getProducts: getProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  deleteProducts: deleteProducts
};
