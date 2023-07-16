import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOtherProfile, getMyProfile } from '../slice/profile-slice'
import DoctorHeader from './DoctorHeader'
import DoctorBody from './DoctorBody'
import DoctorData from './DoctorData'

export default function DoctorProfile() {
    const userId = useSelector((state) => state.auth.user?.id)
    const myRole = useSelector((state) => state.auth?.role)
    const myProfile = useSelector((state) => state.profile?.myProfile)
    const otherProfile = useSelector((state) => state.profile?.otherProfile)

    const dispatch = useDispatch()

    const { doctorId } = useParams()
    const isHost = myRole == 'doctor' && userId == doctorId
    const profile = isHost ? myProfile : otherProfile

    useEffect(() => {
        const myProfile = async (input) => {
            await dispatch(getMyProfile(input)).unwrap()
        }
        const otherProfile = async (input) => {
            await dispatch(getOtherProfile(input)).unwrap()
        }
        const input = { role: 'doctor', id: doctorId }
        if (isHost) {
            myProfile(input)
        } else {
            otherProfile(input)
        }
    }, [])

    return (
        <div className="w-full flex justify-center gap-6 mt-4">
            {profile.profileName == undefined ? null : (
                <>
                    <div className=" max-w-[1000px]  min-w-[600px] w-[700px] rounded-xl shadow-lg my-4 h-fit pb-[20px] bg-white">
                        <DoctorHeader profile={profile} canEdit={isHost} />
                        <DoctorBody profile={profile} canEdit={isHost} />
                    </div>
                    <div className=" max-w-[600px]  min-w-[400px] w-[400px] rounded-xl shadow-lg my-4 h-fit pb-[20px] bg-white">
                        <DoctorData profile={profile} canEdit={isHost} />
                    </div>
                </>
            )}
        </div>
    )
}
