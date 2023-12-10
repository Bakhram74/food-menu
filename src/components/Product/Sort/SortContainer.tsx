import React, {useEffect, useState} from 'react';
import {ProductItem} from "../../../redux/product/productTypes";
import {CategoryItem} from "../../../redux/category/categoryTypes";
import Sort from "./Sort";

type SortProps = {
    category: CategoryItem
    products: ProductItem[]
}

const SortContainer = ({category, products}: SortProps) => {
    const [foods, setFoods] = useState<ProductItem[]>([])

    const filteredProducts=()=>{
        setFoods(
            products.filter((product=>
                    product.category_id === category.id
            ))
        )

    }

    useEffect(()=>{
        filteredProducts()
    },[products])

    return (
        <div >
            <div className={'w-full mb-4'} >
                <h1  className={' md:w-[40%] lg:w-[20%]  text-center font-extrabold m-auto  text-[30px] rounded-2xl bg-[#FAEBD7]'}>{category.category_name}</h1>
            </div>
            <div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'}>
                    <Sort products={foods} categoryName={category.category_name}/>
            </div>
        </div>
    );
};

export default SortContainer;