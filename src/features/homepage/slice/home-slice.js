import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllJobPost } from '../../../api/home-api'
import { getFilterJob } from '../../../api/home-api'
import * as postService from '../../../api/post-api'
import * as profileService from '../../../api/profile-api'
import * as myjobService from '../../../api/myjob-api'

const initialState = {
    allJobPost: [],
    filterJob: [],
    loading: false,
    post: { job: {}, provider: {} },
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

export const getProviderPost = createAsyncThunk(
    'getProviderPost',
    async (input, thunkApi) => {
        try {
            if (input.role != 'doctor') {
                const post = await postService.getPostByIdForGuest(input.postId)
                return post.data[0]
            } else {
                const post = await postService.getPostById(input.postId)
                return post.data[0]
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setDefaultJobRightPage = createAsyncThunk(
    'setDefaultJobRightPage',
    async (input, thunkApi) => {
        try {
            if (input.role == 'doctor') {
                const result = await postService.getPostById(input.id)
                return result.data
            } else {
                const result = await postService.getPostByIdForGuest(input.id)
                return result.data
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setJobRightPage = createAsyncThunk(
    'setJobRightPage',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const savedPostHome = createAsyncThunk(
    'savedPostHome',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.savedJob(input.id)
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const interestedPostHome = createAsyncThunk(
    'interedPostHome',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.interestedJob(input.id)
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
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
                stage.post = { job: {}, provider: {} }
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
            })

            .addCase(getProviderPost.pending, (stage, action) => {
                stage.post = { job: {}, provider: {} }
            })
            .addCase(getProviderPost.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(savedPostHome.fulfilled, (stage, action) => {
                stage.post.jobStatus = 1
            })

            .addCase(interestedPostHome.fulfilled, (stage, action) => {
                stage.post.jobStatus = 2
            })

            .addCase(setJobRightPage.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(setDefaultJobRightPage.fulfilled, (stage, action) => {
                stage.post = action.payload
            }),
})

export default homeSlice.reducer
