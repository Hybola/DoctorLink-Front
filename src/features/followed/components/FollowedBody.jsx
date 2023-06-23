import FollowedCard from './FollowedCard'
export default function FollowedBody({ followedProvider }) {
    const providerList = followedProvider.map((provider) => (
        <FollowedCard provider={provider} key={provider.id} />
    ))
    return (
        <div className=" flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 max-h-[400px] rounded-b-lg   shadow-sm h-fit p-[20px] overflow-auto">
            {providerList}
        </div>
    )
}
