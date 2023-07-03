import FollowedCard from './FollowedCard'
import { useSelector } from 'react-redux'

export default function FollowedBody() {
    const followedProvider = useSelector((state) => state?.followed?.filter)

    const providerList = followedProvider?.map((follow) => (
        <FollowedCard follow={follow} key={follow.id} />
    ))
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 max-h-[400px] rounded-b-lg   shadow-sm h-fit p-[20px] overflow-auto">
            {providerList}
        </div>
    )
}
