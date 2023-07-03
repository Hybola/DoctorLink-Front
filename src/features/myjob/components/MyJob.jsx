import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDocotorJob } from '../slice/myjob-slice'
import NavBar from './NavBar'
import SavedJob from './Savedjob'
import InterestedJob from './InterestedJob'
import ComfirmedJob from './ConfirmedJob'

export default function MyJob() {
    const [myJob, setMyJob] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const currentDoctorJob = async () => {
            await dispatch(getDocotorJob()).unwrap()
        }
        currentDoctorJob()
    }, [])
    return (
        <div className=" bg-[#F5FBFC] flex justify-center w-fit gap-8 mt-8">
            <NavBar myJob={myJob} setMyJob={setMyJob} />
            {myJob == 1 ? <SavedJob /> : null}
            {myJob == 2 ? <InterestedJob /> : null}
            {myJob == 3 ? <ComfirmedJob /> : null}
        </div>
    )
}
