import React, {useEffect, useState} from "react";
import {MdDelete, MdEdit} from "react-icons/md";
import {CategoryItem} from "../../redux/category/categoryTypes";
import {useAppDispatch} from "../../redux/store";
import {deleteCategoryAction} from "../../redux/fullCategory/fullCategoryAction";
import {useSelector} from "react-redux";
import {selectCategory, selectFullCategory} from "../../redux/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";

type EditableCategoryProps = {
    item: CategoryItem,
}

const EditableCategory = ({item}: EditableCategoryProps) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const dispatch = useAppDispatch();

    const onClickDeleteCategory = (name: string) => {
        dispatch(deleteCategoryAction(name))
        setIsDisabled(false)
    }

    console.log('EditableCategory')

    return (
        <div className={'flex flex-col items-center'}>
            {isDisabled ? <></> :
                <MdDelete
                    onClick={() => onClickDeleteCategory(item.category_name)}
                    size={40}
                    className={'hoverScale cursor-pointer text-red-700'}
                />}
            <div className={'flex items-center mb-6'} key={item.id}>
                <input type="text"
                       disabled={isDisabled}
                       className={'text-[30px] border-2 border-gray-400 rounded-xl text-center mr-2'}
                       value={item.category_name}
                />
                <MdEdit size={35} onClick={() => setIsDisabled(!isDisabled)} className={'hoverScale cursor-pointer'}/>
            </div>
        </div>

    )
}
export default EditableCategory