export default function HistoryModalPreview() {
    const detail = {}

    return (
        <>
            <dialog id="PreviewJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] "
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <div className="">
                        <div className="bg-slate-600 h-20 "></div>
                        <div className="flex">
                            <div className="h-24 w-24 bg-cyan-300 mt-[-50px] ml-4"></div>
                            <div className="ml-4 mt-2">22/4/2023</div>
                        </div>
                        <div className="flex gap-8">
                            <div className="font-bold">โรงพยาบาลพญาไท</div>
                            <div>กรุงเทพมหานคร</div>
                        </div>
                        <hr className="mt-2 border-black"></hr>
                        <div className="mt-2">
                            <div className="font-bold mt-2">
                                Title : {detail.title}
                            </div>
                            <div className="font-bold mt-2">
                                Location : {detail.location}
                            </div>
                            <div className="font-bold mt-2">
                                Contract :
                                <div className="font-thin">
                                    Phone : {detail.phone}
                                    <br></br>
                                    Line : {detail.line}
                                </div>
                            </div>
                            <div className="font-bold mt-2">
                                Job Type : {detail.jobType}
                            </div>
                            <div className="font-bold mt-2">
                                Job Description :{detail.jobDes}
                            </div>
                            <div className="font-bold mt-2">
                                WorkingDay :{detail.workingDay}
                            </div>
                            <div className="font-bold mt-2">
                                StartDate :{detail.startDate}
                            </div>
                            <div className="font-bold mt-2">
                                Salary :{detail.salary}
                            </div>
                            <div className="font-bold mt-2">
                                Annual holiday :{detail.annual}
                            </div>
                            <div className="font-bold mt-2">
                                Benefit :{detail.benefit}
                            </div>
                            <div className="font-bold mt-2">
                                other :{detail.other}
                            </div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
