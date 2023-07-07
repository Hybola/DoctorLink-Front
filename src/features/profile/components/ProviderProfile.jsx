import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOtherProfile, getMyProfile } from '../slice/profile-slice'
import * as profileService from '../../../api/profile-api'
import ProviderHeader from './ProviderHeader'
import ProviderBody from './ProviderBody'
import { useState } from 'react'

export default function ProviderProfile() {
    const userId = useSelector((state) => state.auth.user?.id)
    const myRole = useSelector((state) => state.auth?.role)
    const myProfile = useSelector((state) => state.profile?.myProfile)
    const otherProfile = useSelector((state) => state.profile?.otherProfile)
    const [follow, setFollow] = useState(true)

    const dispatch = useDispatch()

    const { providerId } = useParams()
    const isHost = myRole == 'provider' && userId == providerId
    const profile = isHost ? myProfile : otherProfile

    const handdleFollow = async (e) => {
        const rs = await profileService.follow(e.target.id)
        if (rs.data[0] > 0) {
            setFollow(false)
        }
    }
    const handdleUnFollow = async (e) => {
        const rs = await profileService.unFollow(e.target.id)
        if (rs.data[0] > 0) {
            setFollow(true)
        }
    }

    useEffect(() => {
        const myProfile = async (input) => {
            await dispatch(getMyProfile(input)).unwrap()
        }
        const otherProfile = async (input) => {
            await dispatch(getOtherProfile(input)).unwrap()
        }
        const input = { role: 'provider', id: providerId }
        if (isHost) {
            myProfile(input)
        } else {
            otherProfile(input)
        }
        if (myRole == 'doctor')
            profileService.doctorfollow(providerId).then((rs) => {
                if (rs.data.length == 1) setFollow(false)
            })
    }, [])

    return (
        <div className="  max-w-[1000px] min-w-[600px] w-[700px] bg-base-100 rounded-lg mt-8 shadow-lg h-fit pb-[20px]">
            <ProviderHeader
                profile={profile}
                canEdit={isHost}
                follow={follow}
                handdleFollow={handdleFollow}
                handdleUnFollow={handdleUnFollow}
            />
            {profile?.providerName == undefined ? null : (
                <ProviderBody profile={profile} canEdit={isHost} />
            )}
        </div>
    )
}
