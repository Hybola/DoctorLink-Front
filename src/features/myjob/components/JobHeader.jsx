import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    setFilterSavedJob,
    setFilterInterestedJob,
    setFilterConfirmedJob,
} from '../slice/myjob-slice'
import { compareDateAsc } from '../../../utils/dateTime'

export default function JobHeader({ myJob }) {
    const savedJob = useSelector((state) => state.myjob?.savedJob?.allJob)
    const interestJob = useSelector(
        (state) => state.myjob?.interestedJob?.allJob
    )
    const confirmJob = useSelector((state) => state.myjob?.confirmedJob?.allJob)
    const allJob = myJob == 1 ? savedJob : myJob == 2 ? interestJob : confirmJob
    const [filterCondition, setFilterCondition] = useState({
        jobType: { parttime: true, fulltime: true },
        sortBy: 'workdate',
        titletext: '',
    })

    const dispatch = useDispatch()

    const handdleOnchange = (e) => {
        setFilterCondition({ ...filterCondition, titletext: e.target.value })
    }

    useEffect(() => {
        const result = allJob.filter((job) => {
            const typeCondition =
                (filterCondition.jobType.parttime &&
                    job.jobtype == 'PartTime') ||
                (filterCondition.jobType.fulltime && job.jobtype == 'FullTime')
            const titleCondition =
                filterCondition.titletext?.trim() == ''
                    ? true
                    : job.title
                          .toLocaleLowerCase()
                          .includes(
                              filterCondition.titletext.toLocaleLowerCase()
                          )

            return typeCondition && titleCondition
        })

        if (filterCondition.sortBy == 'workdate') {
            const sortedResultByWorkingDate = result.sort((job1, job2) => {
                return compareDateAsc(job1.startDate, job2.startDate)
            })
            if (myJob == 1) {
                dispatch(setFilterSavedJob(sortedResultByWorkingDate)).unwrap()
            }
            if (myJob == 2) {
                dispatch(
                    setFilterInterestedJob(sortedResultByWorkingDate)
                ).unwrap()
            }
            if (myJob == 3) {
                dispatch(
                    setFilterConfirmedJob(sortedResultByWorkingDate)
                ).unwrap()
            }
        } else {
            const sortedResulByProviderName = result.sort((job1, job2) => {
                const provider1 = job1.providerName.toLocaleLowerCase()
                const provider2 = job2.providerName.toLocaleLowerCase()
                if (provider1 < provider2) return -1
                if (provider1 > provider2) return 1
            })
            if (myJob == 1) {
                dispatch(setFilterSavedJob(sortedResulByProviderName)).unwrap()
            }
            if (myJob == 2) {
                dispatch(
                    setFilterInterestedJob(sortedResulByProviderName)
                ).unwrap()
            }
            if (myJob == 3) {
                dispatch(
                    setFilterConfirmedJob(sortedResulByProviderName)
                ).unwrap()
            }
        }
    }, [filterCondition])

    return (
        <div className=" flex flex-col max-w-[900px] min-w-[600px] w-[700px] bg-base-100 rounded-t-xl shadow-lg h-fit p-[30px]">
            <div className="w-full flex flex-col">
                <div className="w-full felx font-bold text-xl mb-2">
                    {myJob == 1
                        ? 'Saved Jobs'
                        : myJob == 2
                        ? 'Interested Jobs'
                        : 'Confirmed Jobs'}
                </div>
                <div className="w-full flex justify-between  ">
                    <div className=" flex flex-col items-start gap-2">
                        <div className="w-full flex justify-between gap-4">
                            <div className="w-[70px]">Job Type:</div>
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        name="jobtype"
                                        id="parttime"
                                        className="w-[18px] h-[18px] "
                                        checked={
                                            filterCondition.jobType.parttime
                                        }
                                        onChange={(e) => {
                                            setFilterCondition({
                                                ...filterCondition,
                                                jobType: {
                                                    ...filterCondition.jobType,
                                                    parttime: e.target.checked,
                                                },
                                            })
                                        }}
                                    />
                                    <label htmlFor="parttime" className="">
                                        Part-time
                                    </label>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="checkbox"
                                        name="jobtype"
                                        id="fulltime"
                                        className="w-[18px] h-[18px]"
                                        checked={
                                            filterCondition.jobType.fulltime
                                        }
                                        onChange={(e) => {
                                            setFilterCondition({
                                                ...filterCondition,
                                                jobType: {
                                                    ...filterCondition.jobType,
                                                    fulltime: e.target.checked,
                                                },
                                            })
                                        }}
                                    />
                                    <label htmlFor="parttime" className="">
                                        Full-time
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <label htmlFor="sortBy" className="w-[70px]">
                                Sort By:
                            </label>
                            <select
                                name="sortBy"
                                id="sortBy"
                                onChange={(e) => {
                                    setFilterCondition({
                                        ...filterCondition,
                                        sortBy: e.target.value,
                                    })
                                }}
                            >
                                <option value="workdate">Working date</option>
                                <option value="providername">
                                    Provider Name
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-end">
                        <input
                            type="search"
                            className="border w-[300px] border-primary py-1 px-4  rounded-lg"
                            placeholder="Search by Job title"
                            onChange={handdleOnchange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
