import Header from "../../components/Header/Header";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
import {Outlet} from "react-router-dom";
import React from "react";
import Description from "../../components/Description/Description";

const Home = () => {
    return (
        <div>
           <Description/>
            <Header/>
            <Category/>
            <Product/>
            <Outlet/>
        </div>
    );
};

export default Home