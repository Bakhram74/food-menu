
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


export const deleteCategoryAction = createAsyncThunk(
    'category/deleteCategory',
    async (categoryName:string, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:4200/category`,{ data: { "category_name": categoryName }});
            return  response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const updateCategoryAction = createAsyncThunk(
    'category/deleteCategory',

    async (  {id, name}:{id: number, name: string}, thunkAPI) => {

        try {
            const response = await axios.put(`http://localhost:4200/category`,  { "category_name": name,"id":id });
            return  response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
