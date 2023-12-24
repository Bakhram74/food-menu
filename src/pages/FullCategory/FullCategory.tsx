import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {selectCategory, selectFullCategory} from "../../redux/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";
import {useAppDispatch} from "../../redux/store";
import { MdOutlineAdd } from "react-icons/md";
import {MdEdit} from "react-icons/md";
import {fetchNewCategory} from "../../redux/fullCategory/fullCategoryAction";
import {CategoryItem} from "../../redux/category/categoryTypes";
import EditableCategory from "./EditableCategory";


const FullCategory = () => {
    const dispatch = useAppDispatch();
    const {categories} = useSelector(selectCategory);
    const{category} = useSelector(selectFullCategory)
    useEffect(() => {
        dispatch(fetchCategory())
    }, [category])

    const [newCategory,setNewCategory]=useState('')

const handleNewCategory=(e:ChangeEvent<HTMLInputElement>)=>{
    setNewCategory(e.currentTarget.value)
}
const clickNewCategory=()=>{
       dispatch(fetchNewCategory(newCategory))
    setNewCategory("")
}

    return (
        <div className={'flex flex-col items-center'}>
            <div className={'flex items-center mt-6'}>
                <input type="text"
                       placeholder={'Добавить'}
                       value={newCategory}
                       onChange={(e)=>handleNewCategory(e)}
                       className={'text-[30px] border-2 border-gray-400  rounded-xl text-center mr-2'}
                />
                <MdOutlineAdd size={40} onClick={clickNewCategory} className={'cursor-pointer'}/>
            </div>


            {categories.map((c)=>{
                return(
                 <EditableCategory key={c.id} item={c} />
                )
            })}
        </div>
    );
};

export default FullCategory;



