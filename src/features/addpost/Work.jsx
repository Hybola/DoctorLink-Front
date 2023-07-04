import React from 'react'
import { dateTimeTH } from '../../utils/dateTime'
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
} from '../../icons'
import { useSelector } from 'react-redux'
export default function Work({ post, p }) {
    const province = useSelector((state) => state.profile?.province)
    const provinceName = province.find((el) => el.id == post?.provinceId)?.name
    return (
        <div className="w-full flex flex-col rounded-lg p-4  mb-6">
            <div className=" flex  w-full  font-semibold text-3xl justify-between ">
                <div className="flex gap-4 items-center">
                    <div>{post?.title}</div>
                </div>
            </div>
            <div className="flex font-thin text-sm gap-1 mb-4">
                <div> post date: </div>
                <div>{dateTimeTH(Date.now())}</div>
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
                <span>{p}</span>
            </div>
            <div className="flex  w-full  h-[30px]  gap-2 my-2 items-end">
                <span>Province :</span>
                <span> {provinceName}</span>
            </div>
            <div className="flex  w-full  h-[30px]  gap-2 my-2 items-end">
                <span>
                    <DescriptionIcon />
                </span>
                <span> {post?.jobDes}</span>
            </div>
            {p == 'PartTime' ? (
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
            ) : p == 'FullTime' ? (
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
