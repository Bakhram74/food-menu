import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {fetchProducts} from "./productAction";
import {ProductItem} from "./productTypes";

interface ProductSliceState {
    description: string
    isSetDesc:boolean
    products: ProductItem[];
    isLoading: boolean;
    error: SerializedError;
}

const initialState: ProductSliceState = {
    description: "",
    isSetDesc:false,
    products: [],
    isLoading: false,
    error: {}
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setDescription: (state, action:PayloadAction<string>) => {
            state.description = action.payload

        },
        setIsDesc: (state, action:PayloadAction<boolean>) => {
            state.isSetDesc = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;

        });

        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});


export const {setDescription,setIsDesc} =
    productSlice.actions;

export default productSlice.reducer;



