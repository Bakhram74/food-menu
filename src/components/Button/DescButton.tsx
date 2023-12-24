import React from 'react';
import {useAppDispatch} from "../../redux/store";
import {setDescription, setIsDesc} from "../../redux/product/productSlice";
import {useSelector} from "react-redux";
import {selectProduct} from "../../redux/selectors";

type DescButtonProps = {
    description: string
}
const DescButton = ({description}: DescButtonProps) => {
    const dispatch = useAppDispatch();
    const {isSetDesc} = useSelector(selectProduct);

    const onClickDescription = (description: string) => {
        dispatch(setDescription(description))
        dispatch(setIsDesc(true))
    }
    return (
        <button
            className={'text-blue-400 text-xl'}
            onClick={() => onClickDescription(description)}
        >
            {isSetDesc ? "" : "Подробно"}
        </button>
    );
};
export default DescButton;
