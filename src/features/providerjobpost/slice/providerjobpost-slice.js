import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as myjobService from '../../../api/myjob-api'
import * as postService from '../../../api/post-api'

const initialState = {
    post: [],
}

export const getPostByProviderId = createAsyncThunk(
    'getPostByProvider',
    async (input, thunkApi) => {
        try {
            const res = await postService.getPostByProviderId(input)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const getPostById = createAsyncThunk(
    'getPostById',
    async (input, thunkApi) => {
        try {
            const res = await postService.getPostById(input)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const savedPost = createAsyncThunk(
    'savedPost',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.savedJob(input.id)
            const index = input.post.findIndex((obj) => obj.id == input.id)
            return index
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const interestedPost = createAsyncThunk(
    'interedPost',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.interestedJob(input.id)
            const index = input.post.findIndex((obj) => obj.id == input.id)
            return index
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const providerjobpost = createSlice({
    name: 'providerjobpost',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getPostByProviderId.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(getPostById.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(savedPost.fulfilled, (stage, action) => {
                stage.post[action.payload].jobStatus = 1
            })

            .addCase(interestedPost.fulfilled, (stage, action) => {
                stage.post[action.payload].jobStatus = 2
            }),
})

export default providerjobpost.reducer
