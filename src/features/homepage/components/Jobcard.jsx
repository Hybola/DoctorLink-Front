export default function Jobcard({ jobpost }) {
    return (
        <div className="h-[220px] w-[350px] rounded-lg border border-primary shadow-lg ">
            <div className="">
                <div className="text-base p-2 flex items-baseline gap-3 mt-3 ml-2">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="font-thin text-sm">วันที่ประกาศ</div>
                </div>
                <div className="text-base p-2 ml-2 font-normal flex items-baseline gap-6 mt-1 ">
                    <p>{jobpost?.providerName}</p>
                    <p>{jobpost?.location}</p>
                </div>
                <div className=" text-base p-2 ml-2 flex items-baseline gap-12 mt-5">
                    <p>{jobpost?.jobType}</p>
                    <p>{jobpost?.startDate}</p>
                </div>
                <div className=" text-base p-2 ml-2  flex items-baseline font-bold -mt-3">
                    <p>{jobpost?.jobTitle}</p>
                </div>
                <div className="text-xl font-bold p-2 ml-2 mt-8">
                    <p>{jobpost?.saraly}</p>
                </div>
            </div>
        </div>
    )
}
