import React, {useEffect} from 'react';

import TopProductContainer from "./TopProduct/TopProductContainer";

import {useSelector} from "react-redux";
import {selectCategory, selectProduct} from "../../redux/selectors";
import {useAppDispatch} from "../../redux/store";
import {fetchProducts} from "../../redux/product/productAction";
import SortContainer from "./Sort/SortContainer";


const Product = () => {
    const {categories} = useSelector(selectCategory);
    const {products} = useSelector(selectProduct);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className={' m-auto px-5 py-5'}>

            <TopProductContainer/>

                {categories.map(category => <SortContainer category={category} products={products} key={category.id}/>)}




        </div>


    );
};


export default Product;