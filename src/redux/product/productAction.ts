import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ProductItem} from "./productTypes";



export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ProductItem[]>(`http://localhost:4200/product/all`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка при загрузке!")
        }
    }
)

