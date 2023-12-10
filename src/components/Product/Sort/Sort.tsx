import React from 'react';
import {ProductItem} from "../../../redux/product/productTypes";
import category from "../../Category/Category";

type SortProps = {
    products: ProductItem[]
    categoryName:string
}

const Sort = ({products,categoryName}: SortProps) => {

    return (
        <>
            {products.map(product =>
                <div key={product.id} id={categoryName}>
                        <div className={'border-none hover:scale-105 duration-300'} key={product.id} >
                            <img src={product.url} alt={product.name}
                                 className={'w-full h-[200px] object-cover rounded-lg'}
                            />
                            <div className={'flex justify-between py-2 px-2'}>
                                <p className={'font-bold text-[23px]'}>{product.name}</p>
                                <p className={'bg-orange-700 rounded-full  w-[70px] h-[70px] -mt-10 border-8 border-white pt-3 px-2 text-white text-[20px] font-bold'}>{product.price}</p>
                            </div>
                        </div>

                    </div>
            )
            }
        </>
    );
};

export default Sort;