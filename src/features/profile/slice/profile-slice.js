import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as profileService from '../../../api/profile-api'

const initialState = {
    myProfile: {},
    otherProfile: {},
    loading: false,
}

// Doctor
export const getMyProfile = createAsyncThunk(
    'myprofile',
    async (input, thunkApi) => {
        try {
            if (input.role == 'doctor') {
                const res = await profileService.doctorProfile(input.id)
                return res.data
            }
            if (input.role == 'provider') {
                const res = await profileService.providerProfile(input.id)
                return res.data
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const getOtherProfile = createAsyncThunk(
    'otherprofile',
    async (input, thunkApi) => {
        try {
            if (input.role == 'doctor') {
                const res = await profileService.doctorProfile(input.id)
                return res.data
            }
            if (input.role == 'provider') {
                const res = await profileService.providerProfile(input.id)
                return res.data
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const uploadImage = createAsyncThunk(
    'uploadImage',
    async (input, thunkApi) => {
        try {
            const res = await profileService.uploadImage(input)
            return res.data
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const editProfile = createAsyncThunk(
    'editProfile',
    async (input, thunkApi) => {
        try {
            if (input.role == 'doctor') {
                const res = await profileService.editDoctorProfile(
                    input.payload
                )
                console.log(res.data)
                if (res.data[0] > 0) {
                    return input.payload
                }
                return {}
            }
            if (input.role == 'provider') {
                const res = await profileService.editProviderProfile(
                    input.payload
                )
                if (res.data[0] > 0) {
                    return input.payload
                }
                return {}
            }
        } catch (err) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getMyProfile.pending, (state, action) => {
                state.myProfile = {}
            })

            .addCase(getMyProfile.fulfilled, (state, action) => {
                state.myProfile = action.payload
            })

            .addCase(getOtherProfile.pending, (state, action) => {
                state.otherProfile = {}
            })

            .addCase(getOtherProfile.fulfilled, (state, action) => {
                state.otherProfile = action.payload
            })

            .addCase(uploadImage.pending, (state, action) => {
                state.loading = true
            })

            .addCase(uploadImage.fulfilled, (state, action) => {
                state.myProfile = { ...state.myProfile, ...action.payload }
                state.loading = false
            })

            .addCase(uploadImage.rejected, (state, action) => {
                state.loading = false
            })

            .addCase(editProfile.fulfilled, (state, action) => {
                state.myProfile = { ...state.profile, ...action.payload }
            })

            .addCase(editProfile.pending, (state, action) => {
                state.myProfile = {}
            }),
})
export default profileSlice.reducer
