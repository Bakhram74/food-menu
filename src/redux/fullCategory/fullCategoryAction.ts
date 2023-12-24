
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewCategory = createAsyncThunk(
    'category/fetchNewCategory',
    async (categoryName:string, thunkAPI) => {
                try {
            const response = await axios.post(`http://localhost:4200/category`,{"category_name":categoryName});
            return  response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
