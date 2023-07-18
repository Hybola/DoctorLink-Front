import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    chatLists: {}, //ข้อความ chat from user
    doctorList: [], //เก็บ profile ของ doctor ทุกคน
}

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChatLists: (state, action) => {
            state.chatLists = action.payload
        },
        setDoctorList: (state, action) => {
            state.doctorList = action.payload
        },
    },
})
export default chatSlice.reducer
export const { setChatLists, setDoctorList } = chatSlice.actions
