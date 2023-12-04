import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CategoryItem, CategorySliceState} from './categoryTypes'
import {fetchCategory} from "./categoryAction";

const initialState: CategorySliceState = {
    items:[{id:0,category_name:""}]
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<CategoryItem[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.items = [];
        });

        builder.addCase(fetchCategory.fulfilled, (state,action) => {
            if (action.payload)
            state.items = action.payload;
        });

        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.items = [];
        })
    }
});

export const {} =
    categorySlice.actions;

export default categorySlice.reducer;



