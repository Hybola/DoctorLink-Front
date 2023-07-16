import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editJobPost, updateAllList, getLists } from './slice/history-slice'

export default function HistoryModalEdit() {
    const getJobResult = useSelector((state) => state.history.getJobResult)
    const objJobResult = { ...getJobResult[0] }
    const allLists = useSelector((state) => state.history?.allLists)
    const dispatch = useDispatch()

    const initialState = {
        title: '',
        location: '',
        map: '',
        phone: '',
        line: '',
        jobType: '',
        PartTime: {
            jobDes: '',
            startDate: '',
            wage: '',
            other: '',
        },
        FullTime: {
            jobDes: '',
            workingDay: '',
            startDate: '',
            salary: '',
            annual: '',
            benefit: '',
            other: '',
        },
    }
    const [input, setInput] = useState(initialState)

    const convertDate = (date) => {
        try {
            if (!date) {
                return ''
            }
            const day = date.split('T')[0]
            const time = date.split('T')[1].split('.')[0]
            return `${day} ${time}`
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log('useffect')
        setInput({ ...getJobResult[0] })
    }, [getJobResult])

    const handleOnchange = (e) => {
        console.log(e.target.name)
        if (input.jobType == 'PartTime') {
            if (
                e.target.name == 'PartTimeJobDes' ||
                e.target.name == 'PartTimeStartDate' ||
                e.target.name == 'PartTimeWage' ||
                e.target.name == 'PartTimeOther'
            ) {
                console.log(e.target.name, e.target.value)

                if (e.target.name == 'PartTimeJobDes') {
                    setInput({
                        ...input,
                        PartTime: { ...input.PartTime, jobDes: e.target.value },
                    })
                } else if (e.target.name == 'PartTimeStartDate') {
                    console.log('PartTimeStartDate', e.target.value)
                    setInput({
                        ...input,
                        PartTime: {
                            ...input.PartTime,
                            startDate: e.target.value,
                        },
                    })
                } else if (e.target.name == 'PartTimeWage') {
                    setInput({
                        ...input,
                        PartTime: { ...input.PartTime, wage: e.target.value },
                    })
                } else if (e.target.name == 'PartTimeOther') {
                    setInput({
                        ...input,
                        PartTime: { ...input.PartTime, other: e.target.value },
                    })
                }
            } else {
                setInput({ ...input, [e.target.name]: e.target.value })
            }
        } else if (input.jobType == 'FullTime') {
            if (
                e.target.name == 'FullTimeJobDes' ||
                e.target.name == 'FullTimeWorkingDay' ||
                e.target.name == 'FullTimeStartDate' ||
                e.target.name == 'FullTimeSalary'
            ) {
                console.log(e.target.name, e.target.value)

                if (e.target.name == 'FullTimeJobDes') {
                    setInput({
                        ...input,
                        FullTime: { ...input.FullTime, jobDes: e.target.value },
                    })
                } else if (e.target.name == 'FullTimeWorkingDay') {
                    console.log('FullTimeWorkingDay', e.target.value)
                    setInput({
                        ...input,
                        FullTime: {
                            ...input.FullTime,
                            workingDay: e.target.value,
                        },
                    })
                } else if (e.target.name == 'FullTimeStartDate') {
                    setInput({
                        ...input,
                        FullTime: {
                            ...input.FullTime,
                            startDate: e.target.value,
                        },
                    })
                } else if (e.target.name == 'FullTimeSalary') {
                    setInput({
                        ...input,
                        FullTime: { ...input.FullTime, salary: e.target.value },
                    })
                } else if (e.target.name == 'FullTimeAnnual') {
                    setInput({
                        ...input,
                        FullTime: { ...input.FullTime, annual: e.target.value },
                    })
                } else if (e.target.name == 'FullTimeBenefit') {
                    setInput({
                        ...input,
                        FullTime: {
                            ...input.FullTime,
                            benefit: e.target.value,
                        },
                    })
                } else if (e.target.name == 'FullTimeOther') {
                    setInput({
                        ...input,
                        FullTime: {
                            ...input.FullTime,
                            other: e.target.value,
                        },
                    })
                }
            } else {
                setInput({ ...input, [e.target.name]: e.target.value })
            }
        }
    }
    const handleUpdate = async () => {
        console.log('handleUpdate', input)
        console.log('allLists', allLists)
        console.log(
            'findIndex',
            allLists.findIndex((e) => e.id == input.id)
        )
        const myIndex = allLists.findIndex((e) => e.id == input.id)
        const myAllLinst = [...allLists]

        myAllLinst.splice(myIndex, 1, input)
        console.log('myAllLinst', myAllLinst)
        dispatch(updateAllList(myAllLinst))

        await dispatch(editJobPost(input)).unwrap()
    }

    return (
        <>
            <dialog id="EditJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base font-semibold text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <div className="bg-base-100 flex flex-col gap-4 px-4">
                        <div className="w-fit text-xl self-center font-bold mb-2">
                            Edit Post
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Job Title</div>
                            <div className="w-full ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    onChange={handleOnchange}
                                    value={input.title}
                                    name="title"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Job Location</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    onChange={handleOnchange}
                                    value={input.location}
                                    name="location"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Google Map</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    onChange={handleOnchange}
                                    value={input.map}
                                    name="map"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Phone</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    onChange={handleOnchange}
                                    value={input.phone}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div>Line ID</div>
                            <div className="w-full  ">
                                <input
                                    type="text"
                                    className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                    onChange={handleOnchange}
                                    value={input.line}
                                    name="line"
                                />
                            </div>
                        </div>

                        {/* JOB DETAILS */}
                        {input?.jobType === 'PartTime' ? (
                            <>
                                <div className="flex flex-col gap-1">
                                    <div>Job Descreiption</div>

                                    <textarea
                                        className="w-full h-[110px] font-normal p-2 pl-3 border border-primary rounded-lg "
                                        onChange={handleOnchange}
                                        value={input.PartTime?.jobDes}
                                        name="PartTimeJobDes"
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col w-[400px] gap-1">
                                        <div>Start Date Time</div>
                                        {/* <div>
                                            {convertDate(
                                                input.PartTime?.startDate
                                            )}
                                        </div> */}
                                        <div className="w-full  ">
                                            <input
                                                type="datetime-local"
                                                className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                                onChange={handleOnchange}
                                                value={convertDate(
                                                    input.PartTime?.startDate
                                                )}
                                                name="PartTimeStartDate"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Salary</div>
                                    <div className="w-full ">
                                        <input
                                            type="text"
                                            className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                            onChange={handleOnchange}
                                            value={input.PartTime?.wage}
                                            name="PartTimeWage"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Other</div>
                                    <div className="w-full  ">
                                        <input
                                            type="text"
                                            className="w-full font-normal h-[40px] p-2 pl-3 border border-primary rounded-lg "
                                            onChange={handleOnchange}
                                            value={input.PartTime?.other}
                                            name="PartTimeOther"
                                        />
                                    </div>
                                </div>{' '}
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col gap-1">
                                    <div>Job Description</div>
                                    <div className="w-full">
                                        <textarea
                                            className="w-full h-[110px] p-2 pl-3 border border-primary rounded-lg font-normal"
                                            onChange={handleOnchange}
                                            value={input.FullTime?.jobDes}
                                            name="FullTimeJobDes"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Working Day</div>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                            onChange={handleOnchange}
                                            value={input.FullTime?.workingDay}
                                            name="FullTimeWorkingDay"
                                        />
                                    </div>
                                </div>
                                <div className="flex  justify-between gap-8">
                                    <div className="flex flex-col w-[400px] gap-1">
                                        <div>Start Date</div>
                                        <div className="flex flex-col gap-1">
                                            <div>
                                                {convertDate(
                                                    input.FullTime?.startDate
                                                )}
                                            </div>
                                            <input
                                                type="date"
                                                className="w-full h-[40px] p-2 border border-primary rounded-lg font-normal"
                                                onChange={handleOnchange}
                                                value={
                                                    input.FullTime?.startDate
                                                        ? convertDate(
                                                              input.FullTime
                                                                  ?.startDate
                                                          ).split(' ')[0]
                                                        : null
                                                }
                                                name="FullTimeStartDate"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[400px] gap-1">
                                        <div>Salary</div>
                                        <div className="w-full  ">
                                            <input
                                                type="text"
                                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                                onChange={handleOnchange}
                                                value={input.FullTime?.salary}
                                                name="FullTimeSalary"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  justify-between gap-8">
                                    <div className="flex flex-col w-[400px] gap-1">
                                        <div>Annual Holiday</div>
                                        <div className="w-full  ">
                                            <input
                                                type="text"
                                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                                onChange={handleOnchange}
                                                value={input.FullTime?.annual}
                                                name="FullTimeAnnual"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[400px] gap-1">
                                        <div>Benefit</div>
                                        <div className="w-full  ">
                                            <input
                                                type="text"
                                                className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                                onChange={handleOnchange}
                                                value={input.FullTime?.benefit}
                                                name="FullTimeBenefit"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div>Other</div>
                                    <div className="w-full  ">
                                        <input
                                            type="text"
                                            className="w-full h-[40px] p-2 pl-3 border border-primary rounded-lg font-normal "
                                            onChange={handleOnchange}
                                            value={input.FullTime?.other}
                                            name="FullTimeOther"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="modal-action gap-8 mr-4">
                        <button
                            className="btn w-[120px] text-base"
                            style={{ textTransform: 'none' }}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn w-[120px] bg-success text-white hover:bg-primary text-base"
                            style={{ textTransform: 'none' }}
                            onClick={handleUpdate}
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}
