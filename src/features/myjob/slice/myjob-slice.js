import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as myjobService from '../../../api/myjob-api'
import { compareDateAsc } from '../../../utils/dateTime'

const initialState = {
    savedJob: { allJob: [], filterJob: [] },
    interestedJob: { allJob: [], filterJob: [] },
    confirmedJob: { allJob: [], filterJob: [] },
    loading: false,
}

export const getDocotorJob = createAsyncThunk(
    'doctorJob',
    async (input, thunkApi) => {
        try {
            const savedJob = await myjobService.getSavedJob()
            const sortedSavedJobByWorkingDate = savedJob.data.sort(
                (job1, job2) => {
                    return compareDateAsc(job1.startDate, job2.startDate)
                }
            )

            const interestedJob = await myjobService.getInterestedJob()

            const sortedInterestedJobByWorkingDate = interestedJob.data.sort(
                (job1, job2) => {
                    return compareDateAsc(job1.startDate, job2.startDate)
                }
            )
            const confirmedJob = await myjobService.getConfirmedJob()

            const sortedconfirmedJobByWorkingDate = confirmedJob.data.sort(
                (job1, job2) => {
                    return compareDateAsc(job1.startDate, job2.startDate)
                }
            )

            return {
                savedJob: sortedSavedJobByWorkingDate,
                interestedJob: sortedInterestedJobByWorkingDate,
                confirmedJob: sortedconfirmedJobByWorkingDate,
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setFilterSavedJob = createAsyncThunk(
    'filterSavedjob',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setFilterInterestedJob = createAsyncThunk(
    'filterInterestedjob',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const setFilterConfirmedJob = createAsyncThunk(
    'filterConfirmedjob',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const unSaveJob = createAsyncThunk(
    'unsavejob',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.unSaveJob(input.id)

            if (res.data[0] > 0) {
                const allJobAfterUnsave = input.allJob.filter(
                    (job) => job.doctorJobId != input.id
                )
                return allJobAfterUnsave
            }
            return input.allJob
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const uptoInterestJob = createAsyncThunk(
    'interestjob',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.uptoInterestJob(input.id)
            const newSaveJob = input.savedJob.filter(
                (job) => job.doctorJobId != input.id
            )
            const uptoInterestJob = input.savedJob.find(
                (job) => job.doctorJobId == input.id
            )
            const newInterestedJob = [...input.interestJob, uptoInterestJob]
            console.log(newInterestedJob)
            return { interestedJob: newInterestedJob, savedJob: newSaveJob }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const unInterestJob = createAsyncThunk(
    'unInterestJob',
    async (input, thunkApi) => {
        try {
            const res = await myjobService.unInterestJob(input.id)
            const newInterestedJob = input.interestedJob.filter(
                (job) => job.doctorJobId != input.id
            )
            const downtoSaveJob = input.interestedJob.find(
                (job) => job.doctorJobId == input.id
            )

            const newSaveJob = [...input.savedJob, downtoSaveJob]
            console.log(newInterestedJob)
            return { interestedJob: newInterestedJob, savedJob: newSaveJob }
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
            .addCase(getDocotorJob.pending, (state, action) => {
                state.savedJob = { allJob: [], filterJob: [] }
                state.interestedJob = { allJob: [], filterJob: [] }
                state.confirmedJob = { allJob: [], filterJob: [] }
            })

            .addCase(getDocotorJob.fulfilled, (state, action) => {
                state.savedJob.allJob = action.payload.savedJob
                state.savedJob.filterJob = action.payload.savedJob
                state.interestedJob.allJob = action.payload.interestedJob
                state.interestedJob.filterJob = action.payload.interestedJob
                state.confirmedJob.allJob = action.payload.confirmedJob
                state.confirmedJob.filterJob = action.payload.confirmedJob
            })

            .addCase(setFilterSavedJob.fulfilled, (state, action) => {
                state.savedJob.filterJob = action.payload
            })

            .addCase(setFilterInterestedJob.fulfilled, (state, action) => {
                state.interestedJob.filterJob = action.payload
            })

            .addCase(setFilterConfirmedJob.fulfilled, (state, action) => {
                state.confirmedJob.filterJob = action.payload
            })

            .addCase(unSaveJob.fulfilled, (state, action) => {
                state.savedJob.allJob = action.payload
                state.savedJob.filterJob = action.payload
            })

            .addCase(uptoInterestJob.fulfilled, (state, action) => {
                state.interestedJob.allJob = action.payload.interestedJob
                state.interestedJob.filterJob = action.payload.interestedJob
                state.savedJob.allJob = action.payload.savedJob
                state.savedJob.filterJob = action.payload.savedJob
            })

            .addCase(unInterestJob.fulfilled, (state, action) => {
                state.interestedJob.allJob = action.payload.interestedJob
                state.interestedJob.filterJob = action.payload.interestedJob
                state.savedJob.allJob = action.payload.savedJob
                state.savedJob.filterJob = action.payload.savedJob
            }),
})
export default myjobSlice.reducer
