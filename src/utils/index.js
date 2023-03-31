const API_URLS = {
  getProducts: "http://localhost:3004/products?_start=0&_limit=100", //get
  deleteProduct: (id) => `http://localhost:3004/products/${id}`, //delete
  updateProduct: (id) => `http://localhost:3004/products/${id}`, //put,patch(single value update )
  addProduct: "http://localhost:3004/products", //method=post
};

export default API_URLS;
