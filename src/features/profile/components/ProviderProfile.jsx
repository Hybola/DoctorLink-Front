import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProfile } from '../slice/profile-slice'
import ProviderHeader from './ProviderHeader'
import ProviderBody from './ProviderBody'

export default function ProviderProfile() {
    const userId = useSelector((state) => state.auth.user?.id)
    const myRole = useSelector((state) => state.auth?.role)
    const profile = useSelector((state) => state.profile?.profile)

    const dispatch = useDispatch()

    const { id } = useParams()
    const canEdit = myRole == 'provider' && userId == id

    useEffect(() => {
        const currentProfile = async (input) => {
            await dispatch(getProfile(input)).unwrap()
        }
        const input = { role: myRole, id: id }
        currentProfile(input)
    }, [])

    return (
        <div className="  max-w-[1000px]  min-w-[600px] w-[700px] bg-base-100 rounded-lg my-4 shadow-lg h-fit pb-[20px]">
            <ProviderHeader profile={profile} canEdit={canEdit} />
            <ProviderBody profile={profile} canEdit={canEdit} />
        </div>
    )
}
