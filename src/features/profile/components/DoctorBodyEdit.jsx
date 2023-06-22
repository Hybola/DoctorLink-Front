import InputBar from './InputBar'

export default function DoctorBodyEdit() {
    return (
        <dialog id="DoctorBodyEdit" className="modal">
            <form method="dialog" className="modal-box bg-base-100">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">
                        Edit Profile Description
                    </h3>
                </div>
                <InputBar label="Profile Name: " name="name" />
                <div className="flex gap-2 ">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-normal text-sm "
                    >
                        Description
                    </label>
                    <textarea
                        className="w-full font-normal text-lg border border-bg-primary rounded-lg "
                        name="description"
                    ></textarea>
                </div>
                <InputBar label="Phone :" name="phone" />
                <InputBar label="LINE ID :" name="lineId" />

                <div className="modal-action gap-2">
                    <button className="btn w-[80px] hover:bg-warning">
                        CANCEL
                    </button>
                    <button className="btn  w-[100px] font-bold hover:bg-success hover:text-white">
                        SAVE
                    </button>
                </div>
            </form>
        </dialog>
    )
}
