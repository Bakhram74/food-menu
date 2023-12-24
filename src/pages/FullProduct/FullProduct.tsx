import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from 'react-router-dom';

const FullProduct = () => {

    const [product, setProduct] = useState({
        admin_id: 0,
        category_id: 0,
        category_name: '',
        id: 0,
        is_available: false,
        is_on_top: false,
        description: "",
        name: "",
        price: 0,
        url: ""
    })
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchProduct() {
            try {
                const {data} = await axios.get('http://localhost:4200/product/' + id);
                setProduct(data);
            } catch (error) {
                alert('Ошибка при получении продукта!');
                navigate('/');
            }
        }

        fetchProduct();
    }, [])
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

    }
    type FormValues = {
        productCategoryId: number
        productName: string;
        productPrice: number;
        description: string;
        is_available: boolean,
        is_on_top: boolean
    };
    const form = useForm<FormValues>({
        defaultValues: {
            productCategoryId: product.category_id,
            productName: product.name,
            productPrice: product.price,
            description: product.description,
            is_available: product.is_available,
            is_on_top: product.is_on_top
        }
    })
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}

              className={'w-full flex flex-col items-center py-6 px-6 mb-10'}>
            <img src={product.url} className={'max-h-[600px] max-w-[600px] rounded-2xl mb-2'}/>

            <label htmlFor="productName" className={'text-[25px] mt-2'}>Название</label>
            <input
                className={'editInput'}
                type="text"
                id="productName"
                value={product.name}
                {...register("productName", {
                    required: {value: true, message: "Обязательное поле"},
                })}/>
            <p className="text-red-700 text-[25px]">{errors.productName?.message}</p>

            <label htmlFor="productPrice" className={'text-[25px] mt-2'}>Цена</label>
            <input
                className={'editInput'}
                type="number"
                id="productPrice"

                {...register("productPrice", {
                    required: {value: true, message: "Обязательное поле"},
                    pattern: {
                        value: /^[0-9]+$/,
                        message: 'Please enter a number',
                    }
                })}
            />
            <p className="text-red-700 text-[12px]">{errors.productPrice?.message}</p>


            <label htmlFor="description" className={'text-[25px] mt-2'}>Описание</label>
            <input
                className={'editInput'}
                type="text"
                id="description"
                value={''}
                {...register("description", {
                    required: {value: true, message: "Обязательное поле"},
                })}
            />
            <p className="text-red-700 text-[25px] mt-2">{errors.description?.message}</p>

            <div className={'flex items-center w-[300px] justify-between mt-2'}>
                <label htmlFor="is_available" className={'text-[25px] '}>В наличии?</label>
                <input
                    className={'editInput w-[40px] h-[40px]'}
                    type="checkbox"
                    id="is_available"
                    {...register("is_available")}
                />
            </div>


            <div className={'flex items-center w-[300px] justify-between mt-2'}>
                <label htmlFor="is_on_top " className={'text-[25px]  '}>В топе?</label>
                <input
                    className={' w-[40px] h-[40px]'}
                    type="checkbox"
                    id="is_on_top"

                    {...register("is_on_top")}
                />
            </div>

            <button type={'submit'}
                    className={'bg-green-400 border-2 border-white rounded-xl px-6 mt-2 text-[25px] hover:bg-green-300 active:bg-green-500'}>Изменить
            </button>
        </form>
    );
};

export default FullProduct;




