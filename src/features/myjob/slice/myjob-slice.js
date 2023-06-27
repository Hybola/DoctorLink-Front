import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as myjobService from '../../../api/myjob-api'
import { compareDateAsc } from '../../../utils/dateTime'

const initialState = {
    savedJob: { allJob: [], filterJob: [] },
    interestedJob: [],
    loading: false,
}

export const getSavedJob = createAsyncThunk(
    'savedjob',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.getSavedJob()
            const sortedResultByWorkingDate = res.data.sort((job1, job2) => {
                return compareDateAsc(job1.startDate, job2.startDate)
            })
            return sortedResultByWorkingDate
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setFilterJob = createAsyncThunk(
    'filterjob',
    async (input, thunkApi) => {
        try {
            console.log(input)
            return input
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
                state.savedJob = { allJob: [], filterJob: [] }
            })

            .addCase(getSavedJob.fulfilled, (state, action) => {
                state.savedJob.allJob = action.payload
                state.savedJob.filterJob = action.payload
            })

            .addCase(setFilterJob.fulfilled, (state, action) => {
                state.savedJob.filterJob = action.payload
            }),
})
export default myjobSlice.reducer
