import FollowedHeader from './FollowedHeader'
import FollowedBody from './FollowedBody'
export default function Followed({ followedProvider, search }) {
    return (
        <div className=" flex flex-col text-success mt-8">
            <FollowedHeader followedProvider={followedProvider} />
            <hr />
            <FollowedBody followedProvider={followedProvider} />
        </div>
    )
}
