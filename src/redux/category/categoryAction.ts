import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {CategoryItem} from "./categoryTypes";




export const fetchCategory = createAsyncThunk(
    'category/fetchCategoryStatus',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`http://localhost:4200/category`);
            if (res.status == 200)
            return  res.data
        } catch (error) {
             rejectWithValue(error)
        }
    }
);
