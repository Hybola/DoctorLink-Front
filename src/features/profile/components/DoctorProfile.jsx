import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProfile } from '../slice/profile-slice'
import DoctorHeader from './DoctorHeader'
import DoctorBody from './DoctorBody'
import DoctorData from './DoctorData'

export default function DoctorProfile() {
    const userId = useSelector((state) => state.auth.user?.id)
    const myRole = useSelector((state) => state.auth?.role)
    const profile = useSelector((state) => state.profile?.profile)

    const dispatch = useDispatch()

    const { id } = useParams()
    const canEdit = myRole == 'doctor' && userId == id

    useEffect(() => {
        const currentProfile = async (input) => {
            await dispatch(getProfile(input)).unwrap()
        }
        const input = { role: myRole, id: id }
        currentProfile(input)
    }, [])

    return (
        <div className="w-full flex justify-center gap-6">
            <div className=" max-w-[1000px]  min-w-[600px] w-[700px] bg-base-100  rounded-lg  shadow-lg my-4 h-fit pb-[20px]">
                <DoctorHeader profile={profile} canEdit={canEdit} />
                <DoctorBody profile={profile} canEdit={canEdit} />
            </div>
            <div className=" max-w-[600px]  min-w-[400px] w-[400px] bg-base-100  rounded-lg  shadow-lg my-4 h-fit pb-[20px]">
                <DoctorData profile={profile} canEdit={canEdit} />
            </div>
        </div>
    )
}
