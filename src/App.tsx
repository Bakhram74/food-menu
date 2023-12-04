import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider,} from "react-router-dom";
import Header from "./components/Header/Header";


const Layout = () => {
    return (
        <div>
            <Header/>
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


