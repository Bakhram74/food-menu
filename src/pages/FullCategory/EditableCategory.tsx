import React, {ChangeEvent, useEffect, useState} from "react";
import {MdDelete, MdEdit} from "react-icons/md";
import {CategoryItem} from "../../redux/category/categoryTypes";
import {useAppDispatch} from "../../redux/store";
import {deleteCategoryAction, updateCategoryAction} from "../../redux/fullCategory/fullCategoryAction";
import { FaRegSave } from "react-icons/fa";
type EditableCategoryProps = {
    item: CategoryItem,
}

const EditableCategory = ({item}: EditableCategoryProps) => {
    const [isDisabled, setIsDisabled] = useState(true)

    const [value, setValue] = useState(item.category_name)
    const [saveButton, setSaveButton] = useState(false)
    const dispatch = useAppDispatch();
    console.log(value)
    const onClickDeleteCategory = (name: string) => {
        dispatch(deleteCategoryAction(name))
        setIsDisabled(false)
    }
const onClickChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value)
    setSaveButton(true)
}
const clickCategoryName=(id:number)=>{
   dispatch(updateCategoryAction({id:id,name:value}))
    }
    return (
        <div className={'flex flex-col items-center'}>

            <div className={'flex items-center mb-1'} key={item.id}>

                <input type="text"
                       onChange={(e) => onClickChange(e)}
                       disabled={isDisabled}
                       className={'text-[30px] border-2 border-gray-400 rounded-xl text-center mr-2'}
                       value={isDisabled?item.category_name:value}
                />
                <MdEdit size={35} onClick={() => setIsDisabled(!isDisabled)} className={'hoverScale cursor-pointer'}/>
            </div>
            {isDisabled ? <></> :
                <div className={'w-[200px] flex justify-center  mb-6'}>
                    <MdDelete
                        onClick={() => onClickDeleteCategory(item.category_name)}
                        size={25}
                        className={'hoverScale cursor-pointer text-red-700 mr-3'}
                    />
                    {(saveButton && value) &&  <FaRegSave size={25} onClick={()=>clickCategoryName(item.id)}/>}
                </div>

            }
        </div>

    )
}
export default EditableCategory