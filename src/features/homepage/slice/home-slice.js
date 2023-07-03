import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getAllJobPost } from '../../../api/home-api'
import { getFilterJob } from '../../../api/home-api'

const initialState = {
    allJobPost: [],
    filterJob: [],
    loading: false,
}

export const allJobPost = createAsyncThunk(
    'post/getallpost',
    async (input, thunkApi) => {
        try {
            const res = await getAllJobPost()
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const searchJob = createAsyncThunk(
    'post/search',
    async (input, thunkApi) => {
        try {
            const res = await getFilterJob(input)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const filterJob = createAsyncThunk(
    'post/filter',
    async (input, thunkApi) => {
        return input
    }
)

const homeSlice = createSlice({
    name: 'home',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(allJobPost.pending, (stage, action) => {
                stage.loading = true
            })
            .addCase(allJobPost.fulfilled, (stage, action) => {
                stage.allJobPost = action.payload
                stage.filterJob = action.payload
                stage.loading = false
            })
            .addCase(allJobPost.rejected, (stage, action) => {
                stage.loading = false
            })
            .addCase(searchJob.pending, (stage, action) => {
                stage.loading = true
            })
            .addCase(searchJob.fulfilled, (stage, action) => {
                stage.allJobPost = action.payload
                stage.filterJob = action.payload
                stage.loading = false
            })
            .addCase(searchJob.rejected, (stage, action) => {
                stage.loading = false
            })

            .addCase(filterJob.fulfilled, (stage, action) => {
                stage.filterJob = action.payload
            }),
})

export default homeSlice.reducer
