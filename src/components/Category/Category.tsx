
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import { useEffect} from "react";
import {selectCategory} from "../../redux/category/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";
import {SampleNextArrow, SamplePrevArrow} from "./Arrow";






function Category() {
    const dispatch = useAppDispatch();
    const {items} = useSelector(selectCategory);
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
        <div className="w-full   ">
                <Slider {...settings}>
                    {items.map((item) => (
                            <div key={item.id} className="py-8 bg-[#fff]">
                                <div className="flex  justify-center  ">
                                    <h2 className="text-[20px] lg:text-[25px]  font-medium   text-center    hover:font-[800] duration-300 cursor-pointer">
                                       {item.category_name}
                                    </h2>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
    );
}

export default Category;



