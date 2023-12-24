import {RootState} from "./store";
import {CategoryItem} from "./category/categoryTypes";

export const selectCategory = (state: RootState) => state.categorySlice;
export const selectProduct = (state: RootState) => state.productSlice;
export const selectTopProduct = (state: RootState) => state.topProductSlice;
export const selectFullCategory = (state: RootState) => state.fullCategorySlice;

