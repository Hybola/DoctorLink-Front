import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    error: null,
    loading: false,
    user: null,
    initialLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState, //บรรทัดนี้เขียนย่อเป็นคำเดียวได้นะ
    reducers: {
        register: (state, action) => {
            state.isAuthenticated = true
        },
        startLoading: (state) => (state.isAuthenticated = true),
    },
})
export default authSlice.reducer
