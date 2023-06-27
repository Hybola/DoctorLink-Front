import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import * as authService from '../../../api/auth-api'
import { removeToken, setToken } from '../../../utils/localStorage'
import jwt_decode from 'jwt-decode'

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
    role: '',
}

// Doctor
export const docRegister = createAsyncThunk(
    'auth/doctor/register',
    async (input, thunkApi) => {
        try {
            const res = await authService.doctorRegister(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.doctorFetchMe()
            return resFetchMe.data.user
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

// GoogleLogin
export const doctorLoginGoogle = createAsyncThunk(
    'auth/doctor/googlelogin',
    async (input, thunkApi) => {
        try {
            const payload = {
                email: input.email,
                firstName: input.given_name,
                lastName: input.family_name,
                ProfileName: input.picture,
                password: input.sub,
            }
            const res = await authService.doctorLoginGoogle(payload)
            setToken(res.data.accessToken)
            const decoded = jwt_decode(res.data.accessToken)
            if (decoded.role == 'doctor') {
                const resFetchMe = await authService.doctorFetchMe()
                return { ...resFetchMe.data, role: 'doctor' }
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const providerLoginGoogle = createAsyncThunk(
    'auth/provider/googlelogin',
    async (input, thunkApi) => {
        try {
            const payload = {
                email: input.email,
                profileImage: input.picture,
                password: input.sub,
            }

            const res = await authService.providerLoginGoogle(payload)
            setToken(res.data.accessToken)

            const decoded = jwt_decode(res.data.accessToken)
            if (decoded.role == 'provider') {
                const resFetchMe = await authService.providerFetchMe()
                return { ...resFetchMe.data, role: 'provider' }
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

// FetchMe
export const docFetchMe = createAsyncThunk(
    'auth/docfetchMe',
    async (_, thunkApi) => {
        try {
            const res = await authService.doctorFetchMe()
            return res.data.user
        } catch (err) {
            console.log('err----->', err)
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)
export const provFetchMe = createAsyncThunk(
    'auth/provfetchMe',
    async (_, thunkApi) => {
        try {
            const res = await authService.providerFetchMe()
            return res.data.user
        } catch (err) {
            console.log('err----->', err)
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

// Logout
export const logout = createAsyncThunk('auth/logout', async () => {
    removeToken()
    toast.success('Log out successfull!')
})

//Provider
export const provRegister = createAsyncThunk(
    'auth/provider/register',
    async (input, thunkApi) => {
        try {
            const res = await authService.providerRegister(input)
            setToken(res.data.accessToken)
            const resFetchMe = await authService.providerFetchMe()
            return resFetchMe.data.user
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

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(logout.fulfilled, (state) => {
                state.isAuthenticated = false
                state.user = null
                state.role = ''
            })

            .addCase(docRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(docRegister.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.loading = false
                state.user = action.payload
                state.role = 'doctor'
            })
            .addCase(docRegister.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            .addCase(docLogin.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.role = 'doctor'
            })

            .addCase(docFetchMe.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.initialLoading = false
                state.role = 'doctor'
            })
            .addCase(docFetchMe.rejected, (state, action) => {
                state.error = action.payload
                state.initialLoading = false
            })
            .addCase(docFetchMe.pending, (state) => {
                state.initialLoading = true
            })

            .addCase(provFetchMe.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.initialLoading = false
                state.role = 'provider'
            })
            .addCase(provFetchMe.rejected, (state, action) => {
                state.error = action.payload
                state.initialLoading = false
            })
            .addCase(provFetchMe.pending, (state) => {
                state.initialLoading = true
            })

            .addCase(provRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(provRegister.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.loading = false
                state.user = action.payload
                state.role = 'provider'
            })
            .addCase(provRegister.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
                state.role = 'provider'
            })
            .addCase(provLogin.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload
                state.role = 'provider'
            })
            .addCase(providerLoginGoogle.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload.user
                state.role = action.payload.role
            })

            .addCase(doctorLoginGoogle.fulfilled, (state, action) => {
                state.isAuthenticated = true
                state.user = action.payload.user
                state.role = action.payload.role
            }),
})
export default authSlice.reducer
