import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as myjobService from '../../../api/myjob-api'

const initialState = {
    savedJob: [],
    interestedJob: [],
    loading: false,
}

export const getSavedJob = createAsyncThunk(
    'savedjob',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.getSavedJob()
            console.log(res.data)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const myjobSlice = createSlice({
    name: 'myjob',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getSavedJob.pending, (state, action) => {
                state.savedJob = []
            })

            .addCase(getSavedJob.fulfilled, (state, action) => {
                state.savedJob = action.payload
            }),
})
export default myjobSlice.reducer
