import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider,} from "react-router-dom";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";


const Layout = () => {
    return (
        <div>
            <Header/>
            <Category/>
            <Product/>
            <Outlet/>
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<Layout/>}>

            </Route>
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


