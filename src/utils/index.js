//from products or cart
// id = to (product obj)

const API_URLS = {
  GET: (from) => `http://localhost:3004/${from}`, //get
  DELETE: (from, id) => `http://localhost:3004/${from}/${id}`, //delete
  UPDATE: (from, id) => `http://localhost:3004/${from}/${id}`, //put,patch(single value update )
  POST: (from) => `http://localhost:3004/${from}`, //method=post
};

export default API_URLS;

//get,post , update ,delete in products,cart array
