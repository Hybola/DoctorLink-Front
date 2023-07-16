import JobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { unInterestJob } from '../slice/myjob-slice'
import { useState } from 'react'
import DoctorChat from '../../chat/doctorChat'
import { LetsChatIcon } from '../../../icons'

export default function InterestedJobBody() {
    const allJob = useSelector((state) => state.myjob?.interestedJob?.allJob)
    const filterJob = useSelector(
        (state) => state.myjob?.interestedJob?.filterJob
    )
    const savedJob = useSelector((state) => state.myjob?.savedJob?.allJob)

    const dispatch = useDispatch()
    ////=== Start: code added by Chee
    const [open, setOpen] = useState(false) //toggle Open Modal DoctorChat
    const [chatUser, setChatUser] = useState(0) //chatUser ตรงนี้คือ provider ตาม Jobcard
    ////=== End: code added by Chee

    const handleUninterestJob = (e) => {
        dispatch(
            unInterestJob({
                id: e.target.id,
                interestedJob: allJob,
                savedJob: savedJob,
            })
        ).unwrap()
    }
    ////=== Start: code added by Chee
    const handleOpenChat = (oneProvider) => {
        setOpen((prev) => !prev)
        setChatUser(oneProvider)
    }
    const handleCloseChat = () => {
        setOpen(false)
        setChatUser({ id: null, name: '' })
    }
    ////=== End: code added by Chee

    const jobList = filterJob.map((job) => (
        <JobCard
            job={job}
            key={job.doctorJobId}
            type={2}
            handleClick1={handleUninterestJob}
            handleClick3={handleOpenChat}
        />
    ))

    return (
        <>
            <div className=" flex flex-col max-w-[900px] min-w-[600px] w-[700px] bg-base-100 rounded-b-xl shadow-lg p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
                {jobList}
            </div>
            {/* //// ==== code below added by Chee ===== */}
            {/* ******  Model Chat Box for Doctor  */}
            {open && (
                <DoctorChat
                    chatUser={chatUser}
                    handleCloseChat={handleCloseChat}
                />
            )}
        </>
    )
}
