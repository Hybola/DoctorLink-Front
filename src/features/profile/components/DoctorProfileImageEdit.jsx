export default function DoctorProfileImageEdit({ currentImage }) {
    return (
        <dialog id="DoctorProfileImageEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-300">
                <div className="flex flex-col h-[300px] justify-between">
                    <div className="flex justify-center mb-2">
                        <h3 className="font-bold text-lg">
                            Edit Profile Image
                        </h3>
                    </div>
                    <div className="w-full flex justify-center items-center ">
                        <div className="w-[150px] h-[150px] bg-info  shadow-lg flex justify-center items-center  rounded-[50%]">
                            <img
                                src={currentImage}
                                alt="profileImage"
                                className="w-[150px] h-[150px] object-cover rounded-[50%]"
                            />
                        </div>
                    </div>

                    <div className="modal-action gap-2">
                        <button className="btn w-[80px] hover:bg-warning">
                            CANCEL
                        </button>
                        <button className="btn  w-[100px] font-bold hover:bg-success hover:text-white">
                            SAVE
                        </button>
                    </div>
                </div>
            </form>
        </dialog>
    )
}
