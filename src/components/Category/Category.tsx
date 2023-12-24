import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import React, {useEffect, useRef, useState} from "react";
import {selectCategory} from "../../redux/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";
import {SampleNextArrow, SamplePrevArrow} from "./Arrow";

import {Link} from 'react-scroll';


function Category() {
    const dispatch = useAppDispatch();
    const { categories, isLoading, error} = useSelector(selectCategory);

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])



    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (

        <div className="w-full h-[100px] mb-4   border-b-2 border-[#FFF8DC] bg-[#FFFFE0] sticky top-0  z-10">
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error.message}</h1>}
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category.id} className="my-8 ">
                        <div className="flex  justify-center ">

                                <Link
                                    activeClass={'activeCategoryButton'}
                                    to={category.category_name}
                                    spy={true}
                                    smooth={true}
                                    offset={-200}
                                    duration={500}

                                >
                                    <button>
                                    <h2  className={ "categoryButton"}>
                                        {category.category_name}
                                    </h2>
                                    </button>
                                </Link>


                        </div>
                    </div>
                ))}
            </Slider>
        </div>


    );
}

export default Category;



