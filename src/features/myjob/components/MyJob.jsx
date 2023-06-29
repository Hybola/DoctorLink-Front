import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDocotorJob } from '../slice/myjob-slice'
import NavBar from './NavBar'
import SavedJob from './Savedjob'
import InterestedJob from './InterestedJob'

export default function MyJob() {
    const userId = useSelector((state) => state.auth.user?.id)
    const [myJob, setMyJob] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const currentDoctorJob = async (id) => {
            await dispatch(getDocotorJob(id)).unwrap()
        }
        currentDoctorJob(userId)
    }, [])
    return (
        <div className=" bg-[#F5FBFC] flex justify-center w-fit gap-8 mt-4">
            <NavBar myJob={myJob} setMyJob={setMyJob} />
            {myJob == 1 ? <SavedJob /> : null}
            {myJob == 2 ? <InterestedJob /> : null}
        </div>
    )
}
