const API_URLS = {
  GET: (to) => `http://localhost:3004/${to}`, //get
  DELETE: (to, id) => `http://localhost:3004/${to}/${id}`, //delete
  UPDATE: (to, id) => `http://localhost:3004/${to}/${id}`, //put,patch(single value update )
  POST: (to) => `http://localhost:3004/${to}`, //method=post
};

export default API_URLS;

//get,post , update ,delete in products,cart array
