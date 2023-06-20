import InputBar from './InputBar'

export default function ProviderEdit() {
    return (
        <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box bg-base-300">
                <div className="flex justify-center mb-2">
                    <h3 className="font-bold text-lg">Edit Provider Profile</h3>
                </div>
                <InputBar label="ชื่อสถานพยาบาล: " name="name" />
                <div className="flex gap-2 ">
                    <label htmlFor="description" className="w-[180px] ">
                        คำบรรยาย
                    </label>
                    <textarea
                        className="textarea textarea-primary w-full  "
                        name="description"
                        placeholder="ตย. โรงพยาบาลเอกชนชั้นนำของไทย"
                    ></textarea>
                </div>
                <InputBar
                    label="ที่อยู่:"
                    name="address"
                    placeholder=" ตย. เลขที่ 1 ซอย เลียบคลองสอง 10 แขวงบางชัน"
                />
                <InputBar label="อำเภอ/เขต:" name="dictrict" />
                <InputBar label="จังหวัด:" name="province" />
                <InputBar label="Google Map Link: " name="googleMap" />
                <InputBar label="เบอร์ติดต่อ :" name="phone" />
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
