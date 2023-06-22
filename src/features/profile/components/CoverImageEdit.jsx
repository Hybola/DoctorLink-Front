export default function CoverImageEdit({ currentImage }) {
    return (
        <dialog id="CoverImageEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100">
                <div className="flex flex-col h-[300px] justify-between">
                    <div className="flex justify-center mb-2">
                        <h3 className="font-bold text-lg">Edit Cover Image</h3>
                    </div>
                    <div className="w-full h-[200px] bg-base-300 rounded-t-lg">
                        <img
                            src={currentImage}
                            alt="coverImage"
                            className="w-full h-[200px] rounded-t-lg object-cover"
                        />
                    </div>

                    <div className="w-full flex justify-around items-center mt-6">
                        <div className="btn w-[180px]  bg-info p-2 rounded-lg flex justify-center items-center hover:bg-success hover:text-white">
                            Upload Image
                        </div>
                        <div className="modal-action flex items-center mt-0">
                            <button className="btn  w-[100px] font-bold ">
                                CANCEL
                            </button>
                            <button className="btn btn-primary  w-[100px] font-bold hover:bg-success text-white">
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </dialog>
    )
}
