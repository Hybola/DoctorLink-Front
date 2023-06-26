import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import homeReducer from '../features/homepage/slice/home-slice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer,
    },
})
export default store
