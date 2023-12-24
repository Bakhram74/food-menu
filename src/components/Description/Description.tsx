import React from 'react';
import {useSelector} from "react-redux";
import {selectProduct} from "../../redux/selectors";
import {useAppDispatch} from "../../redux/store";
import {setDescription, setIsDesc} from "../../redux/product/productSlice";
import { CiCircleRemove } from "react-icons/ci";
const Description = () => {
    const {description} = useSelector(selectProduct);
    const dispatch = useAppDispatch();
    const onclickClearValue = () => {
        dispatch(setDescription(""))
        dispatch(setIsDesc(false))
    }

    return (
        <>
            {description.length > 0
                &&
                <div
                    className={'fixed bg-black/40 w-full h-screen top-0 left-0 z-30 pt-[30vh]'}>
                    <div
                        className={'w-[500px] bg-[#FFFFE0] m-auto border-gray-400 border-2 h-[300px] rounded-3xl text-center pt-3  relative'}>
                        <CiCircleRemove size={40} className={'absolute right-2 cursor-pointer hover:scale-105 duration-300'} onClick={onclickClearValue}/>
                        <p className={'text-[22px]  w-[300px] m-auto mt-4'}>
                            {description}
                        </p>
                    </div>
                </div>}
        </>


    );

};

export default Description;