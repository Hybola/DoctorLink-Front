import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSavedJob } from '../slice/myjob-slice'
import NavBar from './NavBar'
import SavedJob from './Savedjob'

export default function MyJob() {
    const userId = useSelector((state) => state.auth.user?.id)
    const savedJob = useSelector((state) => state.myjob?.savedJob)
    const dispatch = useDispatch()

    useEffect(() => {
        const currentSavedJob = async (id) => {
            await dispatch(getSavedJob(id)).unwrap()
        }
        currentSavedJob(userId)
    }, [])
    return (
        <div className=" bg-[#F5FBFC] flex justify-center w-fit gap-8 mt-4">
            <NavBar />
            <SavedJob  /> 
        </div>
    )
}
