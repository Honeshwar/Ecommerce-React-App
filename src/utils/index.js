const API_URLS = {
  getProducts:
    "https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products", //get
  deleteProduct: (id) =>
    `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products/${id}`, //delete
  updateProduct: (id) =>
    `https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products/${id}`, //put,patch(single value update )
  addProduct:
    "https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products", //method=post
};

export default API_URLS;
