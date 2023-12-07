import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {fetchProducts} from "../productAction";
import {ProductItem} from "../productTypes";
import {fetchTopProducts} from "./topProductAction";

interface ProductSliceState {
    topProducts: ProductItem[];
    isLoading: boolean;
    error: SerializedError;
}

const initialState: ProductSliceState = {
    topProducts: [],
    isLoading: false,
    error:{}
};

const topProductSlice = createSlice({
    name: 'top_product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopProducts.pending, (state, action) => {
            state.isLoading = true;

        });

        builder.addCase(fetchTopProducts.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
            state.isLoading = false;
            state.topProducts = action.payload;
        });
        builder.addCase(fetchTopProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});




export const {} =
    topProductSlice.actions;

export default topProductSlice.reducer;



