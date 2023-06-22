import InputBar from './InputBar'

export default function ProviderEdit() {
    return (
        <dialog id="ProviderBodyEdit" className="modal ">
            <form method="dialog" className="modal-box bg-base-100 w-[600px]">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">Edit Provider Profile</h3>
                </div>
                <InputBar label="Provider Name: " name="name" />
                <div className="flex gap-2 ">
                    <label
                        htmlFor="description"
                        className="w-[180px] font-normal text-sm"
                    >
                        Description
                    </label>
                    <textarea
                        className=" w-full font-normal text-lg border border-bg-primary rounded-lg"
                        name="description"
                    ></textarea>
                </div>
                <InputBar label="Adress:" name="address" />
                <InputBar label="District:" name="dictrict" />
                <InputBar label="Province:" name="province" />
                <InputBar label="Google Map Link: " name="googleMap" />
                <InputBar label="Telephone :" name="phone" />
                <InputBar label="LINE ID :" name="lineId" />

                <div className="modal-action gap-2">
                    <button className="btn w-[80px] ">CANCEL</button>
                    <button className="btn bg-primary  w-[100px] font-bold text-white hover:bg-success">
                        SAVE
                    </button>
                </div>
            </form>
        </dialog>
    )
}
