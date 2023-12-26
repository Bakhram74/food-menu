import {CategoryItem} from "../category/categoryTypes";
import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {fetchCategory} from "../category/categoryAction";
import {deleteCategoryAction, fetchNewCategory, updateCategoryAction} from "./fullCategoryAction";


interface FullCategorySliceState{

    error:SerializedError;
    isLoading:boolean;
    isRender:boolean
}

const initialState: FullCategorySliceState = {

    error:{},
    isLoading:false,
    isRender:false
};

const fullCategorySlice = createSlice({
    name: 'fullCategory',
    initialState,
    reducers: {
        renderCategory: (state) => {
            state.isRender =false
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchNewCategory.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(fetchNewCategory.fulfilled, (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.isRender = true;
        });
        builder.addCase(fetchNewCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(deleteCategoryAction.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(deleteCategoryAction.fulfilled, (state) => {
            state.isLoading = false;
            state.isRender = true;
        });
        builder.addCase(deleteCategoryAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const {renderCategory} =
    fullCategorySlice.actions;

export default fullCategorySlice.reducer;




