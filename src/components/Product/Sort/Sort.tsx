import React from 'react';
import {ProductItem} from "../../../redux/product/productTypes";

type SortProps = {
    products: ProductItem[]
}

const SortContainer = ({products}: SortProps) => {

    return (
        <>
            {products.map(product =>
                <div key={product.id}>
                    {/*<div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'}>*/}
                        <div className={'border-none hover:scale-105 duration-300'} key={product.id}>
                            <img src={product.url} alt={product.name}
                                 className={'w-full h-[200px] object-cover rounded-lg'}
                            />
                            <div className={'flex justify-between py-2 px-2'}>
                                <p className={'font-bold text-[23px]'}>{product.name}</p>
                                <p className={'bg-orange-700 rounded-full  -mt-10 border-8 border-white py-4 px-2 text-white font-bold'}>{product.price}</p>
                            </div>
                        </div>

                    </div>
                // </div>
            )
            }
        </>
    );
};

export default SortContainer;