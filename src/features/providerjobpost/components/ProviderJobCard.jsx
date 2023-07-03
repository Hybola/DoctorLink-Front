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
} from '../../../icons'
import { useSelector } from 'react-redux'

export default function ProviderJobCard({ post, handleClick1 }) {
    const role = useSelector((state) => state.auth.role)
    return (
        <div className="w-full flex flex-col rounded-lg p-4 max-h-[400px] overflow-auto">
            <div className=" flex  w-full  font-semibold text-3xl justify-between ">
                <div>{post?.title}</div>
                {role == 'doctor' ? (
                    <div className="flex items-center text-lg gap-2">
                        {post?.jobStatus == '0' ? (
                            <button className=" border border-primary  text-center text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50">
                                Saved
                            </button>
                        ) : null}
                        {post?.jobStatus == '0' || post?.jobStatus == '1' ? (
                            <button
                                id={post?.id}
                                className=" border border-primary text-center   rounded-2xl px-4 py-1 text-white bg-blue-900"
                                onClick={handleClick1}
                            >
                                Interested
                            </button>
                        ) : null}
                        {post?.jobStatus == '2' ? (
                            <div className=" border border-primary text-center  text-neutral bg-info bg-opacity-50 px-4 py-1 ">
                                Pending Confirm
                            </div>
                        ) : null}
                        {post?.jobStatus == '3' ? (
                            <div className=" text-center  text-white   bg-green-800 px-4 py-1 ">
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

            <div className=" flex w-full  h-[30px]  gap-2 my-2 items-end">
                <a href={post?.map} className=" m-0 p-0">
                    <MapIcon />
                </a>
                <span>{post?.location}</span>
            </div>
            <div className="flex w-full  h-[30px]  gap-2 my-2 items-end">
                <span>
                    <BagIcon />
                </span>
                <span>{post?.jobType}</span>
            </div>
            <div className="flex  w-full  h-[30px]  gap-2 my-2 items-end">
                <span>
                    <DescriptionIcon />
                </span>
                <span> {post?.jobDes}</span>
            </div>
            {post?.jobType == 'PartTime' ? (
                <>
                    <div className="flex w-full  h-[30px]  gap-2 my-2 items-end ">
                        <span>
                            {' '}
                            <WorkingDate />
                        </span>
                        <span>{dateTimeTH(post?.startDate)}</span>
                        <span>to</span>
                        <span> {dateTimeTH(post?.endDate)}</span>
                    </div>
                    <div className="flex w-full  h-[30px]  gap-2 my-2  items-end">
                        <span>
                            <WageIcon />
                        </span>
                        <span>{post?.wage}</span>
                    </div>
                </>
            ) : post?.jobType == 'FullTime' ? (
                <>
                    <div className="flex w-full  h-[30px]  gap-2 my-2  items-end">
                        <span>
                            <StartDateIcon />
                        </span>
                        <span>{dateTimeTH(post?.startDate).split(' ')[0]}</span>
                    </div>
                    <div className="flex  w-full  h-[24px]  gap-2 my-2  items-end">
                        <span>
                            <SalaryIcon />{' '}
                        </span>{' '}
                        <span>{post?.salary}</span>
                    </div>
                </>
            ) : null}
            <div className="flex  w-full  h-[24px]  gap-2 my-2 items-end ">
                <span>
                    <Phone />
                </span>
                <span> {post?.phone}</span>
            </div>
            <div className="flex  w-full  h-[24px]  mt-2  gap-2 items-end">
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
