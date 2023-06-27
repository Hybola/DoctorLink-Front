export default function FollowedCard({ provider }) {
    return (
        <div className="w-full flex justify-between mb-2" id={provider.id}>
            <div className="w-[500px] flex gap-2 min-h-[60px]">
                <div className="w-[60px] h-[60px] bg-slate-600">
                    <img
                        src={provider.profileImage}
                        alt="profileImage"
                        className="w-[60px] h-[60px]  bg-slate-600 object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex text-lg font-bold  ">
                        {provider.name}
                    </div>
                    <div className="flex  text-primary text-base font-thin">
                        Best Hospital
                    </div>
                    <div className="flex   pb-2 text-primary  text-[14px] font-thin">
                        Followed: 14/04/66
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button className=" border border-primary  text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50">
                    Unfollow
                </button>
            </div>
        </div>
    )
}
