
import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {useAppDispatch} from "../../redux/store";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {selectCategory} from "../../redux/category/selectors";
import {fetchCategory} from "../../redux/category/categoryAction";


const SampleNextArrow = (props: any) => {
    const {onClick} = props;
    return (
        <div
            className="lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10  rounded-full bg-[#21201F]  bg-opacity-20 hover:bg-opacity-40 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[26%] right-2"
            onClick={onClick}
        >
      <span>
        <FaLongArrowAltRight/>
      </span>
        </div>
    );
};


const SamplePrevArrow = (props: any) => {
    const {onClick} = props;
    return (

        <div
            className="  lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10  rounded-full  bg-[#21201F]  bg-opacity-20 hover:bg-opacity-40 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[26%] left-2"
            onClick={onClick}
        >
      <span>
        <FaLongArrowAltLeft/>
      </span>
        </div>

    );
};



function Header() {
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
                    {items.map((d) => (
                            <div className="py-8 bg-[#fff]">
                                <div className="flex  justify-center  ">
                                    <h2 className="text-[20px] lg:text-[25px]  font-medium   text-center    hover:font-[800] duration-300 cursor-pointer">
                                       {d.category_name}
                                    </h2>
                            </div>
                        </div>
                    ))}
                </Slider>


        </div>
    );
}

export default Header;



