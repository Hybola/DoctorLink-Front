import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as followedService from '../../../api/followed-api'

const initialState = {
    followedProvider: [],
    unfollowed: [],
    loading: false,
    message: '',
    filter: [],
}

export const getfollowed = createAsyncThunk(
    'followed',
    async (input, thunkApi) => {
        try {
            const getfollowed2 = await followedService.followedProvider(input)

            // console.log(getfollowed2.data)
            return getfollowed2.data
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const unfollowed = createAsyncThunk(
    'unfollowed',
    async (input, thunkApi) => {
        try {
            const unfollowed = await followedService.unfollowed(input.followId)

            return input.remainFollow
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const setfilter = createAsyncThunk(
    'setfilter',
    async (input, thunkApi) => {
        try {
            // console.log(input)
            return input
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const followedslice = createSlice({
    name: 'followed',
    initialState,
    reducers: {
        setmessage: (state, action) => {
            state.message = action.payload
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getfollowed.fulfilled, (state, action) => {
                state.followedProvider = action.payload
                state.filter = action.payload
            })
            .addCase(getfollowed.pending, (state, action) => {
                state.loading = true
            })
            .addCase(unfollowed.fulfilled, (state, action) => {
                state.followedProvider = action.payload
                state.filter = action.payload
            })
            .addCase(unfollowed.pending, (state, action) => {
                state.loading = true
            })
            .addCase(setfilter.fulfilled, (state, action) => {
                state.filter = action.payload
            }),
})
export const { setmessage } = followedslice.actions
export default followedslice.reducer
