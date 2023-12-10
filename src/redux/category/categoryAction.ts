import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {CategoryItem} from "./categoryTypes";





export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<CategoryItem[]>(`http://localhost:4200/category`);
            return  response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
