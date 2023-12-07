import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
import topProductSlice from "./product/topProduct/topProductSlice";

export const store = configureStore({
    reducer: {
        categorySlice,
        productSlice,
        topProductSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();