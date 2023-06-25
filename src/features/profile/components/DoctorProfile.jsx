import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProfile } from '../slice/profile-slice'
import DoctorHeader from './DoctorHeader'
import DoctorBody from './DoctorBody'

export default function DoctorProfile() {
    const userId = useSelector((state) => state.auth.user?.id)
    const myRole = useSelector((state) => state.auth?.role)
    const profile = useSelector((state) => state.profile)

    const dispatch = useDispatch()

    const { id } = useParams()
    const canEdit = myRole == 'doctor' && userId == id

    useEffect(() => {
        const myProfile = async (input) => {
            await dispatch(getProfile(input)).unwrap()
        }
        const input = { role: myRole, id: userId }
        myProfile(input)
    }, [])

    return (
        <div className="w-full flex justify-center">
            <div className=" max-w-[900px]  min-w-[600px] w-[700px] bg-base-100 rounded-lg  my-4 shadow-sm h-fit pb-[20px]">
                <DoctorHeader profile={profile} canEdit={canEdit} />
                <DoctorBody profile={profile} canEdit={canEdit} />
            </div>
        </div>
    )
}
