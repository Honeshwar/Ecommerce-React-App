/* (fake api)for use only, it not delete,update.. actually */
const baseUrl = "https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/";
const API_URLS = {
  GET: (from) =>baseUrl + `${from}`, //get
  DELETE: (from, id) =>baseUrl + `${from}/${id}`, //delete
  UPDATE: (from, id) =>baseUrl + `${from}/${id}`, //put,patch(selected properties update )
  POST: (from) =>baseUrl + `${from}`, //method=post
};
export default API_URLS;















//from products or cart
// id = to (product obj)
//get,post , update ,delete in products,cart array

/* this one delete,update.. actually ,
for this 
step 1) npm install -g json-server
step 2) create db.json file (add some data in that file schema as
  {
   "products":[
     {
      "id": 1,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": "498",
      "rating": 4.09,
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
     },.....
    ], 
   "cart":[
     {
      "id": 1,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": "498",
      "rating": 4.09,
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
     }, ......
    ] 
  } 
  )
step 3) json-server --watch db.json --port 3004
 */
// const API_URLS = {
//   GET: (from) => `http://localhost:3004/${from}`, //get
//   DELETE: (from, id) => `http://localhost:3004/${from}/${id}`, //delete
//   UPDATE: (from, id) => `http://localhost:3004/${from}/${id}`, //put,patch(single value update )
//   POST: (from) => `http://localhost:3004/${from}`, //method=post
// };
// export default API_URLS;
// https://my-json-server.typicode.com/Honeshwar/dummy-ecommerce-api-service/products
