import React, {useState} from "react";
import {MdEdit} from "react-icons/md";
import {CategoryItem} from "../../redux/category/categoryTypes";


type EditableCategoryProps={
    item:CategoryItem,
}

const EditableCategory =({item}:EditableCategoryProps)=>{
    const [isDisabled,setIsDisabled] = useState(true)
    return(
        <div className={'flex items-center mt-6'} key={item.id}>

            <input type="text"
                   disabled={isDisabled}
                   className={'text-[30px] border-2 border-gray-400 rounded-xl text-center mr-2'}
                   value={item.category_name}
            />
            <MdEdit size={35} onClick={()=>setIsDisabled(false)} className={'cursor-pointer'}/>
        </div>
    )
}
export default EditableCategory