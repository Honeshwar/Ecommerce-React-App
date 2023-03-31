import API_URLS from "../utils";

const customFetch = async function (url, { body, ...config }) {
  //     fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   method: 'PUT',
  //   body: JSON.stringify({
  //     id: 1,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  // body = JSON.stringify(body);
  const configuration = {
    ...config,
    body, // body:body,
    headers,
  };
  try {
    const response = await fetch(url, configuration);
    const responseData = await response.json();
    console.log("api call output in custom  fetch func", responseData);
    // if (responseData.success) {
    return {
      success: true, //this i do for my understanding of call in an component(if(res.success))
      products: responseData, //direct an array fake api/no success
    };
    // }
    //  new throw Error(responseData)
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

//CRUD OPERATION
const addAProduct = (product) => {
  return customFetch(API_URLS.addProduct, {
    method: "POST",
    body: product,
  });
};

const getAllProducts = () => {
  return customFetch(API_URLS.getProducts, {
    //return an promise ,when promise full-filled than ,then() get called
    method: "GET",
  });
  // console.log("getAllProducts a", a);//pending
  // a.then((products) => {//when promise full-filled than ,then() get
  //   console.log("getAllProducts", products);
  //   return {
  //     success: true, //this i do for my understanding of call in an component(if(res.success))
  //     products,
  //   };
  // });
};

const updateProduct = (productId, product) => {
  return customFetch(API_URLS.updateProduct(productId), {
    method: "PUT",
    body: product,
  });
};

const deleteProduct = (productId) => {
  console.log("url", API_URLS.deleteProduct(productId));
  return customFetch(API_URLS.deleteProduct(productId), {
    method: "DELETE",
  });
};

export { addAProduct, getAllProducts, updateProduct, deleteProduct };
