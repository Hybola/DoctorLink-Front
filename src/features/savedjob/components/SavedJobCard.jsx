export default function SavedJobCard({ job }) {
    return (
        <div className="w-full flex justify-between " id={job.id}>
            <div className="w-[200px] flex gap-2">
                <div className="w-[50px] h-[50px] bg-slate-600">
                    <img
                        src={job.profileImage}
                        alt="profileImage"
                        className="w-[50px] h-[50px]  bg-slate-600 object-cover"
                    />
                </div>
                <div className="flex  items-end  pb-2">{job.name}</div>
            </div>
            <div className="flex items-center">unfollow</div>
        </div>
    )
}
