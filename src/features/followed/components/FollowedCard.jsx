export default function FollowedCard({ provider }) {
    return (
        <div className="w-full flex justify-between " id={provider.id}>
            <div className="w-[200px] flex gap-2">
                <div className="w-[50px] h-[50px] bg-slate-600">
                    <img
                        src={provider.profileImage}
                        alt="profileImage"
                        className="w-[50px] h-[50px]  bg-slate-600 object-cover"
                    />
                </div>
                <div className="flex  items-end  pb-2">{provider.name}</div>
            </div>
            <div className="flex items-center">unfollow</div>
        </div>
    )
}
