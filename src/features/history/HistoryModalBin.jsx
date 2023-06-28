export default function HistoryModalBin() {
    return (
        <>
            <dialog id="BinJob" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>

                    <div>
                        <h3 className="font-bold text-lg">
                            Confirm Close This Case
                        </h3>
                    </div>

                    <div className=" flex flex-row justify-end">
                        <div>
                            <button className="btn btn-primary text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
