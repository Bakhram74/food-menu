import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductItem} from "../productTypes";



export const fetchTopProducts = createAsyncThunk(
    'products/fetchTop',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ProductItem[]>(`http://localhost:4200/product/top`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка при загрузке!")
        }
    }
)

