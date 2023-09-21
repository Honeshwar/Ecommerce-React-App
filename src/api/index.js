import API_URLS from "../utils";

const customFetch = async function (url, { body, ...config }) {

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  body = JSON.stringify(body);
  
  const configuration = {
    ...config,
    body, // body:body,
    headers,
  };


  try {
    const response = await fetch(url, configuration);
    console.log("response: ",response)
    if(response.ok){
      const responseData = await response.json();
      console.log("responseData at fetch try/catch block: ",responseData);
      return {
        success: true, //this i do for my understanding of call in an component(if(res.success))
        products: responseData, //direct an array fake api/no success
      };
    }
    throw new Error(response.message);
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error,
    };
  }
};

//CRUD OPERATION
const post = ( product) => {
  return customFetch(API_URLS.POST(), {
    method: "POST",
    body: product,
  });
};

const get = () => {
  return customFetch(API_URLS.GET(), {
    //return an promise ,when promise full-filled than ,then() get called
    method: "GET",
  });
};

const update = ( productId, product) => {
  return customFetch(API_URLS.UPDATE(productId), {
    method: "PATCH",
    body: product,
  });
};

const remove = ( productId) => {
  return customFetch(API_URLS.DELETE(productId), {
    method: "DELETE",
  });
};

export { post, get, update, remove };











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