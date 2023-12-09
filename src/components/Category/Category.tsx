
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import React, { useEffect} from "react";
import {selectCategory} from "../../redux/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";
import {SampleNextArrow, SamplePrevArrow} from "./Arrow";
import {setActiveCategory} from "../../redux/category/categorySlice";






function Category() {
    const dispatch = useAppDispatch();
    const {activeCategory,categories,isLoading,error} = useSelector(selectCategory);
    useEffect(() => {
        dispatch(fetchCategory())
    },[] )

const clickSetActiveCategory=(category:string)=>{
        dispatch(setActiveCategory(category))
}
    console.log(activeCategory)
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

    <div className="w-full h-[100px] mb-4   border-b-2 border-[#FFF8DC] bg-[#FFFFE0] sticky top-0  z-20">
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>{error.message}</h1>}
        <Slider {...settings}>
            {categories.map((category) => (
                <div key={category.id} className="my-8 ">
                    <div className="flex  justify-center  ">
                        <button onClick={()=>clickSetActiveCategory(category.category_name)}>
                            <h2 className={activeCategory===category.category_name?"categoryButton activeCategoryButton":"categoryButton"}>
                                {category.category_name}
                            </h2>
                        </button>

                    </div>
                </div>
            ))}
        </Slider>
    </div>



    );
}

export default Category;



