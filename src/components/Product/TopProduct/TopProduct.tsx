import React from 'react';

import {ProductItem} from "../../../redux/product/productTypes";
import DescButton from "../../Button/DescButton";

type TopProductProps={
    item:ProductItem
}
const TopProduct = ({item}:TopProductProps) => {

const description = "Takes inspiration from libraries like Immer and Autodux " +
    "to let you write mutative immutable update logic, " +
    "and even create entire" +
    " slices of state automatically."

    return (
        <div className={'border-none hover:scale-105 duration-300'} key={item.id}>
            <img src={item.url} alt={item.name}
                 className={'w-full h-[200px] object-cover rounded-lg'}
            />
            <div className={'flex justify-between py-2 px-2'}>
                <p className={'font-bold text-[23px]'}>{item.name}</p>
                <p className={'bg-orange-700 rounded-full w-[70px] h-[70px] -mt-10 border-8 border-white px-2 pt-3 text-[20px] text-white font-bold'}>{item.price}</p>
            </div>
            <DescButton description={description}/>
        </div>
    );
};

export default TopProduct;