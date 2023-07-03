import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as historyService from '../../../api/history-api'

const initialState = {
    allLists: [],
    arrayChecked: [],
    loading: false,
    titleSelected: '',
    objSelected: {},
    updateMessage: '',
    doctorSelected: {},
    reloadStatus: 0,
}

// Doctor
export const getLists = createAsyncThunk(
    'history/getLits',
    async (input, thunkApi) => {
        try {
            const res = await historyService.getLists(input.id)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const getTitleSelected = createAsyncThunk(
    'history/getTitleSelected',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const getObjSelected = createAsyncThunk(
    'history/getObjSelected',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const getJob = createAsyncThunk(
    'history/getJob',
    async (input, thunkApi) => {
        try {
            const res = await historyService.getJob(input.id)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const updateSelectedDoctor = createAsyncThunk(
    'history/updateSelectedDoctor',
    async (input, thunkApi) => {
        try {
            const res = await historyService.updateSelectedDoctor(input)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const updateArrayChecked = createAsyncThunk(
    'history/updateArrayChecked',
    async (input, thunkApi) => {
        try {
            return input
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const confirmCloseJobByGetDoctor = createAsyncThunk(
    'history/confirmCloseJobByGetDoctor',
    async (input, thunkApi) => {
        try {
            const res = await historyService.confirmCloseJob(input.id, 2)
            const editIndex = input.allList.findIndex((el) => el.id == input.id)
            const newAllList = [...input.allList]
            console.log(newAllList[editIndex])
            newAllList[editIndex].stage = 5
            return newAllList
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const confirmCloseJobByNoDoctor = createAsyncThunk(
    'history/confirmCloseJobByNoDoctor',
    async (input, thunkApi) => {
        try {
            const res = await historyService.confirmCloseJob(input.id, 0)
            const editIndex = input.allList.findIndex((el) => el.id == input.id)
            const newAllList = [...input.allList]
            newAllList[editIndex].stage = 0
            return newAllList
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const historySlice = createSlice({
    name: 'history',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getLists.pending, (state) => {
                state.loading = true
            })
            .addCase(getLists.fulfilled, (state, action) => {
                state.allLists = action.payload
                state.loading = false
            })
            .addCase(getTitleSelected.fulfilled, (state, action) => {
                state.titleSelected = action.payload
            })
            .addCase(getObjSelected.fulfilled, (state, action) => {
                state.objSelected = action.payload
            })
            .addCase(updateSelectedDoctor.fulfilled, (state, action) => {
                state.updateMessage = action.payload
            })
            .addCase(updateArrayChecked.fulfilled, (state, action) => {
                state.arrayChecked = action.payload
            })
            .addCase(getJob.pending, (state) => {
                state.loading = false
            })
            .addCase(getJob.fulfilled, (state, action) => {
                state.doctorSelected = action.payload
            })
            .addCase(confirmCloseJobByGetDoctor.fulfilled, (state, action) => {
                state.allLists = action.payload
            })
            .addCase(confirmCloseJobByNoDoctor.fulfilled, (state, action) => {
                state.allLists = action.payload
            }),
})
export default historySlice.reducer
