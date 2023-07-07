import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'
import homeReducer from '../features/homepage/slice/home-slice'
import profileReducer from '../features/profile/slice/profile-slice'
import followedReducer from '../features/followed/slice/followed-slice'
import myjobReducer from '../features/myjob/slice/myjob-slice'
import historyReducer from '../features/history/slice/history-slice'
import providerjobpostReducer from '../features/providerjobpost/slice/providerjobpost-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        followed: followedReducer,
        myjob: myjobReducer,
        home: homeReducer,
        history: historyReducer,
        providerjobpost: providerjobpostReducer,
    },
})
export default store
