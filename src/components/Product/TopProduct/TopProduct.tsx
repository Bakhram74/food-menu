import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import { selectTopProduct} from "../../../redux/selectors";
import {fetchTopProducts} from "../../../redux/product/topProduct/topProductAction";
import {useAppDispatch} from "../../../redux/store";



const TopProduct = () => {
    const dispatch = useAppDispatch();
    const {topProducts} = useSelector(selectTopProduct);
    useEffect(() => {
        dispatch( fetchTopProducts())

    },[] )

    return (
        <>
            <div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'}>

                {topProducts.map(item=>{
                    return(
                        <div className={'border-none hover:scale-105 duration-300'} key={item.id}>
                            <img src={item.url} alt={item.name}
                                 className={'w-full h-[200px] object-cover rounded-lg'}
                            />
                            <div className={'flex justify-between py-2 px-2'}>
                                <p className={'font-bold text-[23px]'}>{item.name}</p>
                                <p className={'bg-orange-700 rounded-full w-[70px] h-[70px] -mt-10 border-8 border-white px-2 pt-3 text-[20px] text-white font-bold'}>{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    );
};

export default TopProduct;