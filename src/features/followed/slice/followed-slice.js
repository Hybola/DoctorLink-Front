import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as followedService from '../../../api/followed-api'

const initialState = {
    followedProvider: [],
    unfollowed: [],
    loading: false,
}

export const getfollowed = createAsyncThunk(
    'followed',
    async (input, thunkApi) => {
        try {
            console.log('ddfffffffff', input)
            const getfollowed2 = await followedService.followedProvider(input)

            console.log(getfollowed2.data)
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
const followedslice = createSlice({
    name: 'followed',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getfollowed.fulfilled, (state, action) => {
                state.followedProvider = action.payload
            })
            .addCase(getfollowed.pending, (state, action) => {
                state.loading = true
            })
            .addCase(unfollowed.fulfilled, (state, action) => {
                state.followedProvider = action.payload
            })
            .addCase(unfollowed.pending, (state, action) => {
                state.loading = true
            }),
})

export default followedslice.reducer
