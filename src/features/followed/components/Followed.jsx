import FollowedHeader from './FollowedHeader'
import FollowedBody from './FollowedBody'
export default function Followed({ followedProvider }) {
    return (
        <div className=" flex flex-col mt-4">
            <FollowedHeader followedProvider={followedProvider} />
            <hr />
            <FollowedBody followedProvider={followedProvider} />
        </div>
    )
}
