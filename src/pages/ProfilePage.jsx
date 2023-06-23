import { useSelector } from 'react-redux'
import ProviderProfile from '../features/profile/components/ProviderProfile'
import DoctorProfile from '../features/profile/components/DoctorProfile'

export default function ProfilePage() {
    const role = useSelector((state) => state.auth.role)

    return (
        <div className=" h-screen w-full  bg-base-200 flex justify-center">
            {role == 'provider' ? <ProviderProfile /> : <DoctorProfile />}
        </div>
    )
}
