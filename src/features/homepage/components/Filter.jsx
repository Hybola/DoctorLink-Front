import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterJob } from '../../homepage/slice/home-slice'
import { useEffect } from 'react'

export default function Filter({ handdleEdit }) {
    const allJob = useSelector((state) => state.home?.allJobPost)

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        salaryEstimate: 'Salary',
        employmentType: 'JobType',
        datePost: 'DatePost',
        wage: 'Wage',
    })

    useEffect(() => {
        const result = allJob.filter((job) => {
            const checkEmploymentType =
                input.employmentType == 'JobType' ||
                (input.employmentType == 'Part-Time' &&
                    job.jobType == 'PartTime') ||
                (input.employmentType == 'Full-Time' &&
                    job.jobType == 'FullTime')

            const checkWage =
                input.wage == 'Wage'
                    ? true
                    : job.jobType == 'PartTime'
                    ? (input.wage == '< 1500' && +job.PartTime?.wage < 1500) ||
                      (input.wage == '1500-5000' &&
                          +job.PartTime?.wage >= 1500 &&
                          +job.PartTime?.wage <= 5000) ||
                      (input.wage == '5001-10000' &&
                          +job.PartTime?.wage >= 5001 &&
                          +job.PartTime?.wage <= 10000) ||
                      (input.wage == '> 10000' && +job.PartTime?.wage > 10000)
                    : false

            const checksalaryEstimate =
                input.salaryEstimate == 'Salary'
                    ? true
                    : job.jobType == 'FullTime'
                    ? (input.salaryEstimate == '< 80000' &&
                          job.FullTime?.salary <= 80000) ||
                      (input.salaryEstimate == '80001-150000' &&
                          job.FullTime?.salary >= 80001 &&
                          job.FullTime?.salary <= 150000) ||
                      (input.salaryEstimate == '150001-200000' &&
                          job.FullTime?.salary >= 150001 &&
                          job.FullTime?.salary <= 200000) ||
                      (input.salaryEstimate == '> 200000' &&
                          job.FullTime?.salary > 200000)
                    : false

            console.log(
                job,
                checkEmploymentType,
                checkWage,
                checksalaryEstimate
            )

            // const firstSortDate = new Date() - a

            console.log({ input })
            console.log({ job })

            let last3Days = new Date()

            last3Days.setDate(last3Days.getDate() - 3)

            let last7Days = new Date()

            last7Days.setDate(last7Days.getDate() - 7)

            let checkDate = true

            if (input.datePost === 'Last 3 days') {
                checkDate = new Date(job.createdAt) >= last3Days
            } else if (input.datePost === 'Last 7 days') {
                checkDate = new Date(job.createdAt) >= last7Days
            }

            return (
                checkEmploymentType &&
                checkWage &&
                checksalaryEstimate &&
                checkDate
            )
        })

        dispatch(filterJob(result))
    }, [input])

    return (
        <div className="flex justify-center text-success gap-4">
            {input.datePost == 'DatePost' ? (
                <details className="dropdown">
                    <summary
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        {/* {input.datePost} */}
                        Date Posted
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                        <li>
                            <div
                                type="button"
                                value={3}
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        datePost: 'Last 3 days',
                                    })
                                    handdleEdit()
                                }}
                            >
                                Last 3 days
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                value={7}
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        datePost: 'Last 7 days',
                                    })
                                    handdleEdit()
                                }}
                            >
                                Last 7 days
                            </div>
                        </li>
                    </ul>
                </details>
            ) : (
                <div
                    className="btn m-1 bg-blue-200 border-none shadow-md"
                    style={{ textTransform: 'none' }}
                    onClick={() => setInput({ ...input, datePost: 'DatePost' })}
                >
                    <div>{input.datePost} </div>
                    <span>✕</span>
                </div>
            )}

            {input.employmentType === 'JobType' ? (
                <details className="dropdown">
                    <summary
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Job Type
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        employmentType: 'Part-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                Part-time
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                Full-time
                            </div>
                        </li>
                    </ul>
                </details>
            ) : (
                <div>
                    <div>
                        <div
                            className="btn m-1 bg-blue-200 border-none shadow-md"
                            style={{ textTransform: 'none' }}
                            onClick={() =>
                                setInput({
                                    ...input,
                                    employmentType: 'JobType',
                                })
                            }
                        >
                            <div>{input.employmentType} </div>
                            <span>✕</span>
                        </div>
                    </div>
                </div>
            )}

            {input.employmentType ===
            'Part-Time' ? null : input.salaryEstimate === 'Salary' ? (
                <details className="dropdown">
                    <summary
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Salary
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '< 80000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                {`< 80,000`}
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '80001-150000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                80,000-150,000
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '150001-200000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                150,000-200,000
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '> 200000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                {`> 200,000`}
                            </div>
                        </li>
                    </ul>
                </details>
            ) : (
                <div>
                    <div
                        className="btn m-1 bg-blue-200 border-none shadow-md"
                        style={{ textTransform: 'none' }}
                        onClick={() =>
                            setInput({
                                ...input,
                                salaryEstimate: 'Salary',
                            })
                        }
                    >
                        <div>{input.salaryEstimate} </div>
                        <span>✕</span>
                    </div>
                </div>
            )}

            {input.employmentType === 'Full-Time' ? null : input.wage ===
              'Wage' ? (
                <details className="dropdown">
                    <summary
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Wage
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        wage: '< 1500',
                                        employmentType: 'Part-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                <p>{`< 1,500`}</p>
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        wage: '1500-5000',
                                        employmentType: 'Part-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                <p>1,500-5,000</p>
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        wage: '5000-10000',
                                        employmentType: 'Part-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                <p>5,000-10,000</p>
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        wage: '> 10000',
                                        employmentType: 'Part-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                <p> {`> 10,000`}</p>
                            </div>
                        </li>
                    </ul>
                </details>
            ) : (
                <div>
                    <div
                        className="btn m-1 bg-blue-200 border-none shadow-md"
                        style={{ textTransform: 'none' }}
                        onClick={() =>
                            setInput({
                                ...input,
                                wage: 'Wage',
                            })
                        }
                    >
                        <div>{input.wage} </div>
                        <span>✕</span>
                    </div>
                </div>
            )}
        </div>
    )
}
