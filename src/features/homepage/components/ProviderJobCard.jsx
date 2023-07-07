import { dateTimeTH } from '../../../utils/dateTime'
import {
    MapIcon,
    BagIcon,
    DescriptionIcon,
    StartDateIcon,
    SalaryIcon,
    Phone,
    LineLIcon,
    WorkingDate,
    WageIcon,
    KeptIcon,
} from '../../../icons'
import { useSelector } from 'react-redux'

export default function ProviderJobCard({ post, handleClick1, handleClick2 }) {
    const role = useSelector((state) => state.auth.role)
    return (
        <div className="w-full flex flex-col rounded-lg p-4  mb-4 shadow-lg ">
            <div className=" flex  w-full  font-semibold text-3xl justify-between ">
                <div className="flex gap-4 items-center">
                    <div className="w-[400px]">{post?.title}</div>
                    {role == 'doctor' && +post?.jobStatus > 0 ? (
                        <span>
                            <KeptIcon />
                        </span>
                    ) : null}
                </div>

                {role == 'doctor' ? (
                    <div className="flex items-center text-lg gap-2">
                        {post?.jobStatus == '0' ? (
                            <button
                                className=" border border-primary  text-center text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50"
                                id={post?.id}
                                onClick={handleClick2}
                            >
                                Saved
                            </button>
                        ) : null}
                        {post?.jobStatus == '0' || post?.jobStatus == '1' ? (
                            <button
                                id={post?.id}
                                className=" border border-primary  text-center text-white rounded-2xl px-4 py-1 hover:bg-info bg-primary"
                                onClick={handleClick1}
                            >
                                Apply Work
                            </button>
                        ) : null}
                        {post?.jobStatus == '2' ? (
                            <div className="text-center text-white bg-info px-4 py-1 rounded-lg ">
                                Pending Confirm
                            </div>
                        ) : null}
                        {post?.jobStatus == '3' ? (
                            <div className=" text-center text-white bg-emerald-500 rounded-lg px-4 py-1 ">
                                Confirmed
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            <div className="flex font-thin text-sm gap-1 mb-4">
                <div> post date: </div>
                <div>{dateTimeTH(post?.createdAt).split(' ')[0]}</div>
            </div>

            <div className=" flex w-full  h-[30px]  gap-2 my-2 items-center">
                <a href={post?.map} className=" m-0 p-0">
                    <MapIcon />
                </a>
                <span>{post?.location}</span>
            </div>
            <div className="flex w-full  h-[30px]  gap-2 my-2 items-center">
                <span>
                    <BagIcon />
                </span>
                <span>{post?.jobType}</span>
            </div>
            <div className="flex  w-full  gap-2 my-2 items-end">
                <span className="self-start">
                    <DescriptionIcon />
                </span>
                <p> {post?.jobDes}</p>
            </div>
            {post?.jobType == 'PartTime' ? (
                <>
                    <div className="flex w-full  h-[30px]  gap-2 my-2 items-center ">
                        <span>
                            <StartDateIcon />
                        </span>
                        <span>{dateTimeTH(post?.startDate)}</span>
                        <span>to</span>
                        <span> {dateTimeTH(post?.endDate)}</span>
                    </div>
                    <div className="flex w-full  h-[30px]  gap-2 my-2  items-center">
                        <span>
                            <SalaryIcon />
                        </span>
                        <span>{post?.wage}</span>
                    </div>
                </>
            ) : post?.jobType == 'FullTime' ? (
                <>
                    <div className="flex w-full  h-[30px]  gap-2 my-2 items-center">
                        <span>
                            <StartDateIcon />
                        </span>
                        <span>{dateTimeTH(post?.startDate).split(' ')[0]}</span>
                    </div>
                    <div className="flex  w-full  h-[24px]  gap-2 my-2 items-center">
                        <span>
                            <SalaryIcon />
                        </span>
                        <span>{post?.salary}</span>
                    </div>
                </>
            ) : null}
            <div className="flex  w-full  h-[24px]  gap-2 my-2 items-center ">
                <span>
                    <Phone />
                </span>
                <span> {post?.phone}</span>
            </div>
            <div className="flex  w-full  h-[24px]  mt-2  gap-2 items-center">
                <span>
                    <LineLIcon />
                </span>
                <span> {post?.line}</span>
            </div>
            <div className="flex flex-col  w-full  h-[30px]  mt-2 ">
                <div>
                    <span>Other:</span> <span>{post?.other}</span>
                </div>
            </div>
        </div>
    )
}
