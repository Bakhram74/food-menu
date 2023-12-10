import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {CategoryItem} from './categoryTypes'
import {fetchCategory} from "./categoryAction";



interface CategorySliceState{
    categories:CategoryItem[];
    error:SerializedError;
    isLoading:boolean;
}

const initialState: CategorySliceState = {

    categories:[],
    error:{},
    isLoading:false
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.isLoading = true;

        });
        builder.addCase(fetchCategory.fulfilled, (state, action:PayloadAction<CategoryItem[]>) => {
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const {} =
    categorySlice.actions;

export default categorySlice.reducer;



