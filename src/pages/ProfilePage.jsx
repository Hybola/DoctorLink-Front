import { useState } from 'react'
import ProviderProfile from '../features/profile/components/ProviderProfile'
import DoctorProfile from '../features/profile/components/DoctorProfile'

export default function ProfilePage() {
    const [isProvider, setProvider] = useState(false)

    return (
        <div className=" w-full  bg-base-200 flex justify-center">
            {isProvider ? <ProviderProfile /> : <DoctorProfile />}
        </div>
    )
}
