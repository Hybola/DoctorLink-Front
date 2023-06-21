import DoctorBodyEdit from './DoctorBodyEdit'

export default function DoctorBody({ profile, user }) {
    const handleBodyEdit = () => window.DoctorBodyEdit.showModal()


    return (
        <div className="flex flex-col p-[20px] mx-[16px] border-solid border-2 rounded-lg gap-4">
            <div className="w-full h-[30px] flex justify-between">
                <div className=" min-w-[200px]  font-bold text-2xl">
                    {profile?.name}
                </div>
                {user?.userId == profile?.userId ? (
                    <div className=" mr-[20px]">
                        <button
                            className="btn btn-info max-h-[20px]  min-h-[14px] font-normal text-white px-2 py-0"
                            onClick={handleBodyEdit}
                        >
                            Edit
                        </button>
                        <DoctorBodyEdit />
                    </div>
                ) : null}
            </div>
            <div className="w-full h-[30px]  text-xl">
                {profile?.description}
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
