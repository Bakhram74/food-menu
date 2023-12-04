import {RootState} from "../store";
import {CategoryItem} from "./categoryTypes";

export const selectCategory = (state: RootState) => state.categorySlice;

// const counter = useSelector((state) => state.counter)