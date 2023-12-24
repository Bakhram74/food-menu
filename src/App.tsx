import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import FullProduct from "./pages/FullProduct/FullProduct";
import Home from "./pages/Home/Home";
import FullCategory from "./pages/FullCategory/FullCategory";


const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="product/:id" element={<FullProduct/>}/>
            <Route path="category" element={<FullCategory/>}/>
        </Route>
    )
);


function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;



