import React, {useState} from 'react';
import {ProductItem} from "../../../redux/product/productTypes";
import {MdEdit} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
type SortProps = {
    products: ProductItem[]
    categoryName: string
}

const Sort = ({products, categoryName}: SortProps) => {
    const [isAuth, setIsAuth] = useState(true)
    const navigate = useNavigate()
    const setEditProduct = (id:number)=>{
        navigate(`/product/${id}`);
    }
    return (
        <>
            {products.map(product =>
                <div key={product.id} id={categoryName}>
                    <div className={'border-none hover:scale-105 duration-300 relative'} key={product.id}>
                        {isAuth &&
                            <MdEdit
                                onClick={()=>setEditProduct(product.id)}
                                size={30}
                                className={'absolute bg-black/50 text-white left-[90%] md:left-[87%] lg:left-[87%] top-2 rounded-[10px] cursor-pointer hover:text-[#A9A9A9] '}/>
                        }
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