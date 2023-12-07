
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import React, { useEffect} from "react";
import {selectCategory} from "../../redux/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";
import {SampleNextArrow, SamplePrevArrow} from "./Arrow";






function Category() {
    const dispatch = useAppDispatch();
    const {categories,isLoading,error} = useSelector(selectCategory);
    useEffect(() => {
        dispatch(fetchCategory())
    },[] )



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

    <div className="w-full h-[100px] ">
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>{error.message}</h1>}
        <Slider {...settings}>
            {categories.map((category) => (
                <div key={category.id} className="py-8 bg-[#fff]">
                    <div className="flex  justify-center  ">
                        <h2 className="text-[20px] lg:text-[25px]  font-medium   text-center    hover:font-[800] duration-300 cursor-pointer">
                            {category.category_name}
                        </h2>
                    </div>
                </div>
            ))}
        </Slider>
    </div>



    );
}

export default Category;



