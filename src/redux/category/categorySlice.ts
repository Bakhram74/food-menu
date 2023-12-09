import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {CategoryItem} from './categoryTypes'
import {fetchCategory} from "./categoryAction";



interface CategorySliceState{
    activeCategory:string
    categories:CategoryItem[];
    error:SerializedError;
    isLoading:boolean;
}

const initialState: CategorySliceState = {
    activeCategory:'',
    categories:[],
    error:{},
    isLoading:false
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveCategory:(state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload
        },
    },

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

export const {setActiveCategory} =
    categorySlice.actions;

export default categorySlice.reducer;



