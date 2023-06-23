export default function SavedJobCard({ job }) {
    return (
        <div className="w-full flex justify-between mb-2" id={job.id}>
            <div className="w-[500px] flex gap-2 min-h-[60px]">
                <div className="w-[60px] h-[60px] bg-slate-600">
                    <img
                        src={job?.profileImage}
                        alt="profileImage"
                        className="w-[60px] h-[60px]  bg-slate-600 object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex  text-lg font-bold ">
                        รับ GP parttime
                    </div>
                    <div className="flex  text-primary text-base font-thin ">
                        {job?.name}
                    </div>
                    <div className="flex   pb-2 text-primary  text-[14px] font-thin">
                        Posted: 14/04/66
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <button className=" border  btn btn-primary rounded-2xl px-4 min-h-[30px] h-[30px] hover:bg-success hover:text-white">
                    view post
                </button>
            </div>
        </div>
    )
}
