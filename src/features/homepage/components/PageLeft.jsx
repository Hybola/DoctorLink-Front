import React from 'react'
import Jobcard from './Jobcard'
import { setDefaultJobRightPage } from '../slice/home-slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function PageLeft({ joblist, pageAt, setPageAt }) {
    const capacity = 5
    const role = useSelector((state) => state.auth?.role)
    const filterJob = useSelector((state) => state.home?.filterJob)

    const dispatch = useDispatch()

    const clickPageBack = () => {
        if (pageAt > 1) {
            setPageAt(pageAt - 1)
        }
    }

    const clickNextPage = () => {
        if (pageAt < joblist.length / capacity) {
            setPageAt(pageAt + 1)
        }
    }

    const startPage = (page, capacity) => page * capacity - capacity
    const endPage = (page, capacity) => page * capacity

    const pagination = (page, capacity, items) => {
        const start = startPage(page, capacity)
        const end = endPage(page, capacity)
        return items.slice(start, end)
    }
    const showAtPage = pagination(pageAt, capacity, joblist)
    const start = startPage(pageAt, capacity)
    const end = endPage(pageAt, capacity)
    const job = showAtPage.map((j) => <Jobcard jobpost={j} key={j.id} />)

    useEffect(() => {
        if (showAtPage[0]) {
            dispatch(
                setDefaultJobRightPage({ id: showAtPage[0].id, role: role })
            )
        } else if (filterJob[0]) {
            dispatch(
                setDefaultJobRightPage({ id: filterJob[0].id, role: role })
            )
        }
    }, [pageAt, filterJob])

    return (
        <div className="h-[800px] w-[430px] flex justify-center border rounded-xl shadow-xl pt-4 ml-5 bg-base-100">
            <div className="h-full w-full flex flex-col gap-2 items-center overflow-y-scroll overflow-x-hidden   ">
                <div className="flex w-full  justify-between ">
                    <div className="w-[180px] flex justify-end gap-2 mt-2">
                        <div className="font-bold">
                            {+start + 1} - {end}
                        </div>
                        <div>of</div>
                        <div>{joblist.length}</div>
                        <div>jobs</div>
                    </div>
                    <div className="flex gap-2 mr-5 items-center">
                        <div>
                            <button
                                onClick={clickPageBack}
                                className="bg-primary rounded-lg w-[30px] h-[20px] text-base-100 flex justify-center items-center"
                            >
                                &lt;
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={clickNextPage}
                                className="bg-primary rounded-lg w-[30px] h-[20px]  text-base-100 flex justify-center items-center"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 w-full ">
                    {/* ส่วนของการ์ดงานด้านซ้าย */}
                    {job}
                </div>
            </div>
        </div>
    )
}
