export default function HistoryModalBin() {
    return (
        <>
            <dialog id="BinJob" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>

                    <div>
                        <h3 className="font-semibold text-xl p-3">
                            Confirm Close This Case?
                        </h3>
                    </div>

                    <div className=" flex flex-row justify-end">
                        <div>
                            <button
                                className="btn w-[120px] bg-success text-white hover:bg-primary text-base"
                                style={{ textTransform: 'none' }}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
