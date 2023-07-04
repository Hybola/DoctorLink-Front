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
            const provider = await profileService.providerProfile(
                input.providerId
            )
            if (input.role != 'doctor') {
                const post = await postService.getPostByIdForGuest(input.postId)
                return { job: post.data[0], provider: provider.data }
            } else {
                const post = await postService.getPostById(input.postId)
                return { job: post.data[0], provider: provider.data }
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const savedPost = createAsyncThunk(
    'savedPost',
    async (input, thunkApi) => {
        try {
            const res = myjobService.savedJob(input.id)
            console.log(res.data)

            return input.result
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const interestedPost = createAsyncThunk(
    'interedPost',
    async (input, thunkApi) => {
        try {
            const res = myjobService.interestedJob(input.id)
            console.log(res.data)

            return input.result
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

            .addCase(getProviderPost.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(savedPost.fulfilled, (stage, action) => {
                stage.post = action.payload
            })

            .addCase(interestedPost.fulfilled, (stage, action) => {
                stage.post = action.payload
            }),
})

export default homeSlice.reducer
