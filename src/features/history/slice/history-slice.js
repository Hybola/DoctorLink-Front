import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as historyService from '../../../api/history-api'

const initialState = {
    allLists: {},
    loading: false,
}

// Doctor
export const getLists = createAsyncThunk('profile', async (input, thunkApi) => {
    try {
        const res = await historyService.getLists(input.id)

        return res.data
    } catch (err) {
        return thunkApi.rejectWithValue(err.response.data.message)
    }
})

const profileSlice = createSlice({
    name: 'history',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getLists.pending, (state, action) => {
                state.loading = true
            })

            .addCase(getLists.fulfilled, (state, action) => {
                state.allLists = action.payload
                state.loading = false
            })

            .addCase(getLists.rejected, (state, action) => {
                state.loading = false
            }),
})
export default profileSlice.reducer
