import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterJob } from '../../homepage/slice/home-slice'
import { useEffect } from 'react'

export default function Filter({ handdleEdit }) {
    const allJob = useSelector((state) => state.home?.allJobPost)

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        salaryEstimate: 'SalaryEstimate',
        employmentType: 'EmploymentType',
        datePost: 'DatePost',
        wage: 'Wage',
    })

    useEffect(() => {
        const result = allJob.filter((job) => {
            const checkEmploymentType =
                input.employmentType == 'EmploymentType' ||
                (input.employmentType == 'Part-Time' &&
                    job.jobType == 'PartTime') ||
                (input.employmentType == 'Full-Time' &&
                    job.jobType == 'FullTime')

            const checkWage =
                input.wage == 'Wage'
                    ? true
                    : job.jobType == 'PartTime'
                    ? (input.wage == '< 1500' && +job.PartTime.wage < 1500) ||
                      (input.wage == '1500-5000' &&
                          +job.PartTime.wage >= 1500 &&
                          +job.PartTime.wage <= 5000) ||
                      (input.wage == '5001-10000' &&
                          +job.PartTime.wage >= 5001 &&
                          +job.PartTime.wage <= 10000) ||
                      (input.wage == '> 10000' && +job.PartTime.wage > 10000)
                    : false

            const checksalaryEstimate =
                input.salaryEstimate == 'SalaryEstimate'
                    ? true
                    : job.jobType == 'FullTime'
                    ? (input.salaryEstimate == '< 40000' &&
                          job.FullTime.salary <= 40000) ||
                      (input.salaryEstimate == '40001-100000' &&
                          job.FullTime.salary >= 40001 &&
                          job.FullTime.salary <= 100000) ||
                      (input.salaryEstimate == '> 100000' &&
                          job.FullTime.salary > 100000)
                    : false

            console.log(
                job,
                checkEmploymentType,
                checkWage,
                checksalaryEstimate
            )

            // const checkDate =
            //     input.datePost == 'DatePost' ||
            //     (input.datePost == 'Last 3 days' &&
            //         job.createPost == 'Last 3 days') ||
            //     (input.datePost == 'Last 7 days' &&
            //         job.createPost == 'Last 7 days')
            return (
                checkEmploymentType && checkWage && checksalaryEstimate
                // checkDate
            )
        })

        dispatch(filterJob(result))
    }, [input])

    return (
        <div className="flex justify-center text-success gap-4">
            {input.datePost == 'DatePost' ? (
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        {input.datePost}
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                    >
                        <li>
                            <div
                                type="button"
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
                </div>
            ) : (
                <div
                    className="flex  gap-2 bg-slate-500 h-[48px] rounded-md text-black items-center mt-1 p-2"
                    onClick={() => setInput({ ...input, datePost: 'DatePost' })}
                >
                    <div>{input.datePost} </div>
                    <span>X</span>
                </div>
            )}

            {input.employmentType === 'EmploymentType' ? (
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Employment Type
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                    >
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
                </div>
            ) : (
                <div>
                    <div>
                        <div
                            className="flex  gap-2 bg-slate-500 h-[48px] rounded-md text-black items-center mt-1 p-2"
                            onClick={() =>
                                setInput({
                                    ...input,
                                    employmentType: 'EmploymentType',
                                })
                            }
                        >
                            <div>{input.employmentType} </div>
                            <span>X</span>
                        </div>
                    </div>
                </div>
            )}

            {input.employmentType ===
            'Part-Time' ? null : input.salaryEstimate === 'SalaryEstimate' ? (
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Salary Estimate
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                    >
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '< 40000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                {`< 40000`}
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '40000-100000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                40,000-100,000
                            </div>
                        </li>
                        <li>
                            <div
                                type="button"
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        salaryEstimate: '> 100000',
                                        employmentType: 'Full-Time',
                                    })
                                    handdleEdit()
                                }}
                            >
                                {`> 100,000`}
                            </div>
                        </li>
                    </ul>
                </div>
            ) : (
                <div>
                    <div
                        className="flex  gap-2 bg-slate-500 h-[48px] rounded-md text-black items-center mt-1 p-2"
                        onClick={() =>
                            setInput({
                                ...input,
                                salaryEstimate: 'SalaryEstimate',
                            })
                        }
                    >
                        <div>{input.salaryEstimate} </div>
                        <span>X</span>
                    </div>
                </div>
            )}

            {input.employmentType === 'Full-Time' ? null : input.wage ===
              'Wage' ? (
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn m-1 shadow-md"
                        style={{ textTransform: 'none' }}
                    >
                        Wage
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                    >
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
                                <p>{`< 1500`}</p>
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
                </div>
            ) : (
                <div>
                    <div
                        className="flex  gap-2 bg-slate-500 h-[48px] rounded-md text-black items-center mt-1 p-2"
                        onClick={() =>
                            setInput({
                                ...input,
                                wage: 'Wage',
                            })
                        }
                    >
                        <div>{input.wage} </div>
                        <span>X</span>
                    </div>
                </div>
            )}
        </div>
    )
}
