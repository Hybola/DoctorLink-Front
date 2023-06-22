export default function Jobcard({ jobpost }) {
  return (
    <div className="h-[350px] w-[460px] rounded-lg border border-primary shadow-lg ">
      <div className="">
        <div className="text-base p-5 flex items-baseline gap-3">
          <div>Logo</div>
          <div>วันที่ประกาศ</div>
        </div>
        <div className="text-xl p-5  flex items-baseline gap-5">
          <p>{jobpost?.providerName}</p>
          <p>{jobpost?.location}</p>
        </div>
        <div className=" text-sm p-5  flex items-baseline gap-12">
          <p>{jobpost?.jobType}</p>
          <p>{jobpost?.startDate}</p>
        </div>
        <div className=" text-sm p-5  flex items-baseline gap-12 font-bold">
          <p>{jobpost?.jobTitle}</p>
        </div>
        <div className="text-xl font-bold p-5">
          <p>{jobpost?.saraly}</p>
        </div>
      </div>
    </div>
  );
}
