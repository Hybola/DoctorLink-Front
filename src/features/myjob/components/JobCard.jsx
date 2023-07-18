import { dateTimeTH } from '../../../utils/dateTime'
import { useNavigate } from 'react-router-dom'
import {
    MenuIcon,
    Unsaved,
    Apply,
    Reverse,
    ChatBTN,
} from '../../../icons/index'

export default function JobCard({
    job,
    type,
    handleClick1,
    handleClick2,
    handleClick3,
}) {
    const navigate = useNavigate()

    return (
        <div
            className="w-full flex justify-between mb-2 border-b-[1px]"
            id={job.doctorJobId}
        >
            <div className="w-[500px] flex gap-2 min-h-[60px]">
                <div
                    className="w-[60px] h-[60px] bg-slate-600  cursor-pointer"
                    id={job.providerId + '/post/' + job.jobPostId}
                    onClick={(e) => navigate(`/doctor/provider/${e.target.id}`)}
                >
                    <img
                        id={job.providerId + '/post/' + job.jobPostId}
                        src={job?.image}
                        alt="profileImage"
                        className="w-[60px] h-[60px]  bg-slate-600 object-cover    cursor-pointer"
                    />
                </div>
                <div className="flex flex-col">
                    <div
                        className="flex  text-lg font-bold  cursor-pointer "
                        id={job.providerId + '/post/' + job.jobPostId}
                        onClick={(e) =>
                            navigate(`/doctor/provider/${e.target.id}`)
                        }
                    >
                        {job?.title}
                    </div>
                    <div className="flex  text-primary text-base font-thin gap-2">
                        <div>{job?.jobtype == 'FullTime' ? 'FT' : 'PT'}</div>
                        {job?.jobtype == 'FullTime' ? (
                            <div> ({dateTimeTH(job?.startDate)}) </div>
                        ) : (
                            <div>
                                <div> ({dateTimeTH(job?.startDate)}) </div>
                            </div>
                        )}
                    </div>
                    <div className="flex  text-primary text-base font-thin gap-4 ">
                        <div>{job?.providerName}</div>
                        <div>#{job?.location}</div>
                    </div>
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                    <div className="w-[24px] h-[24px] rounded-full hover:bg-base-300 flex justify-center items-center">
                        <MenuIcon />
                    </div>
                </label>
                <ul
                    tabIndex={0}
                    className="mt-1 z-[1] p-2  shadow-xl menu menu-sm dropdown-content bg-base-100  w-52   border-base-300 border-[1px] rounded-b-lg rounded-l-lg"
                >
                    <li>
                        <div>
                            <div
                                className="w-[30px]"
                                id={job.doctorJobId}
                                onClick={handleClick1}
                            >
                                {type == 1 ? (
                                    <Unsaved />
                                ) : type == 2 ? (
                                    <Reverse />
                                ) : null}
                            </div>
                            <div id={job.doctorJobId} onClick={handleClick1}>
                                {type == 1
                                    ? 'Unsave'
                                    : type == 2
                                    ? 'UnInterested'
                                    : null}
                            </div>
                        </div>
                    </li>

                    {type == 1 ? (
                        <li>
                            <div>
                                <div
                                    className="w-[30px]"
                                    id={job.doctorJobId}
                                    onClick={handleClick2}
                                >
                                    <Apply />
                                </div>
                                <div
                                    id={job.doctorJobId}
                                    onClick={handleClick2}
                                >
                                    Interest
                                </div>
                            </div>
                        </li>
                    ) : null}
                    {type == 2 || type == 3 ? (
                        <li>
                            <div>
                                <div
                                    className="w-[30px]"
                                    onClick={(e) => {
                                        handleClick3({
                                            id: job.providerId,
                                            name: job.providerName,
                                            providerImage: job.image,
                                        })
                                    }}
                                >
                                    <ChatBTN />
                                </div>
                                <div
                                    onClick={(e) => {
                                        handleClick3({
                                            id: job.providerId,
                                            name: job.providerName,
                                            providerImage: job.image,
                                        })
                                    }}
                                >
                                    Chat
                                </div>
                            </div>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    )
}
