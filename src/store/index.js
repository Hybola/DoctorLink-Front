import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import profileReducer from '../features/profile/slice/profile-slice'
import followedReducer from '../features/followed/slice/followed-slice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        followed: followedReducer,
    },
})
export default store
