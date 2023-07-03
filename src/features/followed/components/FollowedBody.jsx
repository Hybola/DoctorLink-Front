import FollowedCard from './FollowedCard'
import { useSelector } from 'react-redux'

export default function FollowedBody() {
    const followedProvider = useSelector((state) => state?.followed?.filter)

    const providerList = followedProvider?.map((follow) => (
        <FollowedCard follow={follow} key={follow?.id} />
    ))
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px] bg-white max-h-[400px] rounded-b-2xl shadow-lg h-fit p-[20px] overflow-auto">
            {providerList}
        </div>
    )
}
