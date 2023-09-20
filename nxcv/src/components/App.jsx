import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Navbar} from './index.js'
import { Cart, Details, Home } from '../pages/index.js'
import { Provider, useDispatch } from 'react-redux'
import store from '../featuers/store/store.js'
import { get } from '../api/index.js'
import { productsAction } from '../featuers/slices/productSlice.js'

function App() {
  const dispatch =   useDispatch();

  useEffect(async()=>{
    const data = await get("products");//data = {success,products}. try/catch error handling of response,data.succes define call status no code break
    dispatch(productsAction.add(data.products));// dispatch func an obj accept , action.type,action.payload, payload we pass in toolkit create action creator func
  },[]);
    const router = createBrowserRouter([
        {path:'/',element:<Navbar/>,children:[
            {path:'/',element:<Home/>,},
            {path:'/details/:productId',element:<Details/>,},
            {path:'/cart',element:<Cart/>,},
        ]}
    ])
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;