import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import categorySlice from "./category/categorySlice";

export const store = configureStore({
    reducer: {
        categorySlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();