import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as authService from '../../../api/auth-api'
import { removeToken, setToken } from '../../../utils/localStorage'

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
}

// Doctor
export const docRegister = createAsyncThunk(
    'auth/doctor/register',
    async (input, thunkApi) => {
        try {
            const res = await authService.doctorRegister(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.doctorFetchMe()
            return resFetchMe.data.user ////// Check again
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const docLogin = createAsyncThunk(
    'auth/doctor/login',
    async (input, thunkApi) => {
        try {
            const res = await authService.doctorLogin(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.doctorFetchMe()
            return resFetchMe.data.user
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const docFetchMe = createAsyncThunk(
    'auth/doctor/fetchMe',
    async (_, thunkApi) => {
        try {
            const res = await authService.doctorFetchMe()
            return res.data.user
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

// Logout
export const logout = createAsyncThunk('auth/logout', async () => {
    removeToken()
})

//Provider
export const provRegister = createAsyncThunk(
    'auth/provider/register',
    async (input, thunkApi) => {
        try {
            const res = await authService.providerRegister(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.providerFetchMe()
            return resFetchMe.data.user ////// Check again
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const provLogin = createAsyncThunk(
    'auth/provider/login',
    async (input, thunkApi) => {
        try {
            const res = await authService.providerLogin(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.providerFetchMe()
            return resFetchMe.data.user
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const provFetchMe = createAsyncThunk(
    'auth/provider/fetchMe',
    async (_, thunkApi) => {
        try {
            const res = await authService.providerFetchMe()
            return res.data.user
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState, //บรรทัดนี้เขียนย่อเป็นคำเดียวได้นะ
    extraReducers: (builder) =>
        builder
            .addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false
                state.user = null
            })

            .addCase(docRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(docRegister.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.loading = false
                state.user = action.payload
            })
            .addCase(docRegister.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            .addCase(docLogin.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
            })

            .addCase(docFetchMe.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.initialLoading = false
            })
            .addCase(docFetchMe.rejected, (state, action) => {
                state.error = action.payload
                state.initialLoading = false
            })
            .addCase(docFetchMe.pending, (state) => {
                state.initialLoading = true
            })

            .addCase(provRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(provRegister.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.loading = false
                state.user = action.payload
            })
            .addCase(provRegister.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            .addCase(provLogin.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
            })

            .addCase(provFetchMe.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.initialLoading = false
            })
            .addCase(provFetchMe.rejected, (state, action) => {
                state.error = action.payload
                state.initialLoading = false
            })
            .addCase(provFetchMe.pending, (state) => {
                state.initialLoading = true
            }),
})
export default authSlice.reducer
