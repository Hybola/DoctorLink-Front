import ProviderProfile from '../features/profile/components/ProviderProfile'
import { useParams } from 'react-router-dom'

export default function ProviderProfilePage() {
    const { providerId, postId, page } = useParams()
    return (
        <div className="  w-full h-screen bg-[#F5FBFC] flex justify-center">
            <ProviderProfile />
        </div>
    )
}
