export default function ProviderHeader({ profile, user }) {
    return (
        <div className=" h-[220px]">
            <div className="w-full h-[150px] bg-base-300 rounded-t-lg">
                <img
                    src={profile?.coverImagePath}
                    alt="coverImage"
                    className="w-full h-[150px] rounded-t-lg object-cover"
                />
            </div>
            {user?.userId == profile?.userId ? (
                <div className="w-full flex  flex-col  items-end">
                    <div className="bg-base-100 w-[40px] h-[40px] rounded-[50%]  -my-[120px] mr-[20px] flex justify-center  items-center">
                        <div>Edit</div>
                    </div>
                </div>
            ) : null}
            <div>
                <div className="w-[150px] h-[150px] bg-info -my-[90px] ml-[28px] shadow-lg flex justify-center items-center ">
                    <img
                        src={profile?.profileImagePath}
                        alt="profileImage"
                        className="w-[150px] h-[150px] object-cover"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col  gap-2">
                <div className="w-[200px] h-[10px] ml-[200px] mt-[44px] flex justify-start gap-2">
                    <div className="flex justify-start gap-1">
                        <div>{profile.follower}</div>
                        <div>follower</div>
                    </div>
                </div>
                {user?.userId != profile?.userId ? (
                    <div className="w-[200px] h-[14px] ml-[200px] mt-[8px]">
                        <button className="btn btn-success max-h-[20px]  min-h-[14px] font-normal px-2 py-0">
                            Follow
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
