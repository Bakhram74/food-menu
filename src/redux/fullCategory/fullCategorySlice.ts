import {CategoryItem} from "../category/categoryTypes";
import {createSlice, PayloadAction, SerializedError} from "@reduxjs/toolkit";
import {fetchCategory} from "../category/categoryAction";
import {fetchNewCategory} from "./fullCategoryAction";


interface FullCategorySliceState{
    category:string
    error:SerializedError;
    isLoading:boolean;
}

const initialState: FullCategorySliceState = {
    category:"",
    error:{},
    isLoading:false
};

const fullCategorySlice = createSlice({
    name: 'fullCategory',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchNewCategory.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(fetchNewCategory.fulfilled, (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.category = action.payload;
        });
        builder.addCase(fetchNewCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const {} =
    fullCategorySlice.actions;

export default fullCategorySlice.reducer;




