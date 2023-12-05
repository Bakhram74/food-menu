import {FaLongArrowAltLeft, FaLongArrowAltRight} from "react-icons/fa";


export const SampleNextArrow = (props: any) => {
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


export const SamplePrevArrow = (props: any) => {
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