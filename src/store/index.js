import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import profileReducer from '../features/profile/slice/profile-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
    },
})
export default store
