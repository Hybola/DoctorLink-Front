export default function HistoryModalPreview() {
    const detail = {}

    return (
        <>
            <dialog id="PreviewJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base font-semibold text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <div>
                        <div className="bg-success h-20 "></div>
                        <div className="flex">
                            <div className="h-28 w-28 bg-cyan-300 mt-[-50px] ml-4 rounded-full"></div>
                            <div className="ml-4 mt-2">22/4/2023</div>
                        </div>
                        <div className="flex gap-8 mt-2">
                            <div>โรงพยาบาลพญาไท</div>
                            <div>กรุงเทพมหานคร</div>
                        </div>
                        <hr className="mt-2 border-black"></hr>
                        <div className="flex flex-col gap-3 mt-2">
                            <div>Title : {detail.title}</div>
                            <div>Location : {detail.location}</div>
                            <div>Phone : {detail.phone}</div>
                            <div>Line : {detail.line}</div>
                            <div>Job Type : {detail.jobType}</div>
                            <div>Job Description :{detail.jobDes}</div>
                            <div>WorkingDay :{detail.workingDay}</div>
                            <div>StartDate :{detail.startDate}</div>
                            <div>Salary :{detail.salary}</div>
                            <div>Annual holiday :{detail.annual}</div>
                            <div>Benefit :{detail.benefit}</div>
                            <div>Other :{detail.other}</div>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
