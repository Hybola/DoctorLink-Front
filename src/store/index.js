import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import homeReducer from '../features/homepage/slice/home-slice'
import profileReducer from '../features/profile/slice/profile-slice'
import myjobReducer from '../features/myjob/slice/myjob-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        myjob: myjobReducer,
        home: homeReducer,
    },
})
export default store
