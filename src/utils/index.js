//from products or cart
// id = to (product obj)
//get,post , update ,delete in products,cart array

/* this one delete,update.. actually  */
const API_URLS = {
  GET: (from) => `http://localhost:3004/${from}`, //get
  DELETE: (from, id) => `http://localhost:3004/${from}/${id}`, //delete
  UPDATE: (from, id) => `http://localhost:3004/${from}/${id}`, //put,patch(single value update )
  POST: (from) => `http://localhost:3004/${from}`, //method=post
};
export default API_URLS;

/* for use only, it not delete,update.. actually */
// const API_URLS = {
//   GET: (from) =>
//     `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/${from}`, //get
//   DELETE: (from, id) =>
//     `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/${from}/${id}`, //delete
//   UPDATE: (from, id) =>
//     `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/${from}/${id}`, //put,patch(single value update )
//   POST: (from) =>
//     `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/${from}`, //method=post
// };
// export default API_URLS;

// https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products
