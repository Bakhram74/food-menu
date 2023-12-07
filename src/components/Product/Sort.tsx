import React, {useEffect} from 'react';
import {ProductItem} from "../../redux/product/productTypes";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {selectProduct} from "../../redux/selectors";
import {fetchProducts} from "../../redux/product/productAction";



const Sort = () => {
    const dispatch = useAppDispatch();
    const {products, isLoading, error} = useSelector(selectProduct);


    useEffect(() => {
        dispatch(fetchProducts())

    }, [])

    return (
        <div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'}>

            {products.map(item=>{
                return(
                    <div className={'border-none hover:scale-105 duration-300'} key={item.id}>
                        <img src={item.url} alt={item.name}
                             className={'w-full h-[200px] object-cover rounded-lg'}
                        />
                        <div className={'flex justify-between py-2 px-2'}>
                            <p className={'font-bold'}>{item.name}</p>
                            <p className={'bg-orange-700 rounded-full  -mt-10 border-8 border-white py-4 px-2 text-white font-bold'}>{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Sort;