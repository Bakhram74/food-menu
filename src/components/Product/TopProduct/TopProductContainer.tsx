import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectTopProduct} from "../../../redux/selectors";
import {fetchTopProducts} from "../../../redux/product/topProduct/topProductAction";
import {useAppDispatch} from "../../../redux/store";
import Description from "../../Description/Description";
import TopProduct from "./TopProduct";



const TopProductContainer = () => {
    const dispatch = useAppDispatch();
    const {topProducts} = useSelector(selectTopProduct);
    useEffect(() => {
        dispatch(fetchTopProducts())

    }, [])

    return (
        <>
            <div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'}>

                {topProducts.map(item => {
                    return (
                       <TopProduct key={item.id} item={item}/>
                    )
                })}
            </div>
        </>

    );
};

export default TopProductContainer;