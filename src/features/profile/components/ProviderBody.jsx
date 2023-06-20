import ProviderEdit from './ProviderEdit'

export default function ProviderBody({ profile, user }) {
    const handleEdit = () => window.my_modal_1.showModal()

    return (
        <div className="flex flex-col p-[20px] mx-[16px] border-solid border-2 rounded-lg gap-2">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    {profile?.name}
                </div>
                {user?.userId == profile?.userId ? (
                    <div className=" mr-[20px]">
                        <button
                            className="btn btn-info max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <ProviderEdit />
                    </div>
                ) : null}
            </div>
            <div className="w-full h-[30px]  text-xl">
                {profile?.description}
            </div>
            <div className="w-full h-[30px]   text-lg flex gap-2">
                <div>Location: </div>
                <div className="flex">
                    <div>{profile?.location?.address}</div>
                    <div>
                        {profile?.location?.isBKK ? 'เขต' : 'อำเภอ'}{' '}
                        {profile?.district}
                    </div>
                    <div>{profile?.location?.province}</div>
                </div>
            </div>
            <div className="w-full h-[30px]   text-lg flex gap-1 ">
                <div>Google Map: </div>
                <div> {profile?.googleMap}</div>
            </div>
            <div className="w-full text-lg flex flex-col">
                <div className="flex gap-1">
                    <span>Phone:</span>
                    <span>{profile?.phone}</span>
                </div>
                <div className="flex gap-1">
                    <span>Lind-Id:</span>
                    <span>{profile?.lineId}</span>
                </div>
            </div>
        </div>
    )
}
