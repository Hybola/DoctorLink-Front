import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HistoryRowMenu from './HistoryRowMenu'
import HistoryModals from './HistoryModals'
import HistoryStage from './HistoryStage'
import { getLists, getJob } from './slice/history-slice'

import { all } from 'axios'
import { array } from 'joi'
import MyLoad from '../../components/Loading'
import { useParams } from 'react-router-dom'

export default function HistoryForm() {
    const loading = useSelector((state) => state.history?.loading)
    const allLists = useSelector((state) => state.history?.allLists)
    const user = useSelector((state) => state.auth?.user)
    const input = { id: user?.id }

    const [follower, setFollower] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLists(input)).unwrap()
    }, [])

    let newDate = new Date()
    let day =
        newDate.getDate() < 10
            ? `0${newDate.getDate()}`
            : `${newDate.getDate()}`
    let month =
        newDate.getMonth() + 1 < 10
            ? `0${newDate.getMonth() + 1}`
            : `${newDate.getMonth() + 1}`
    let year = newDate.getFullYear()
    const today = `${day}-${month}-${year}`

    const [activeChk, setActiveChk] = useState('checked')
    const [sortPostChk, setsortPostChk] = useState('checked')
    const [sortJobChk, setsortJobChk] = useState('checked')
    const [showHistory, setShowHistory] = useState([])
    const [classTextFullTime, setClassTextFullTime] = useState('')
    const [classTextPartTime, setClassTextPartTime] = useState('')
    const [actionPage, setActionPage] = useState('PartTime')
    const [sortBy, setSortBy] = useState('create_at')

    const changeDateFormat = (date, joinBy) => {
        const arr = date.split('T')
        const newDate = arr[0].split('-').reverse().join(joinBy)
        return newDate
    }
    const diffDay = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000
        const arrCreate = start.split('-')
        const arrToday = end.split('-')

        const firstDate = new Date(arrCreate[2], arrCreate[1], arrCreate[0])
        const secondDate = new Date(arrToday[2], arrToday[1], arrToday[0])
        const diffDays = Math.round((secondDate - firstDate) / oneDay)

        return diffDays
    }

    const objFilter = {
        actionPage: actionPage,
        sortJobChk: sortJobChk,
        sortBy: sortBy,
        activeChk: activeChk,
        sortPostChk: sortPostChk,
    }

    const hdlActiveOnChange = () => {
        activeChk == 'checked' ? setActiveChk('') : setActiveChk('checked')
    }
    const hdlSortPostDateOnChange = () => {
        setSortBy('create_at')
        sortPostChk == 'checked'
            ? setsortPostChk('')
            : setsortPostChk('checked')
    }

    const hdlSortJobDateOnChange = () => {
        setSortBy('startDate')
        sortJobChk == 'checked' ? setsortJobChk('') : setsortJobChk('checked')
    }

    const hdlPageAction = (page) => {
        if (page == 'FullTime') {
            setClassTextPartTime('')
        } else {
            setClassTextFullTime('')
        }
        setActionPage(page)
    }

    const hdlTextFtEnter = () => {
        const cn = 'text-primary'
        setClassTextFullTime(cn)
    }
    const hdlMouseLeaveFt = () => {
        const cn = ''
        setClassTextFullTime(cn)
    }
    const hdlMouseEnterPt = () => {
        const cn = 'text-primary'
        setClassTextPartTime(cn)
    }
    const hdlTextPtEnter = () => {
        const cn = ''
        setClassTextPartTime(cn)
    }

    const filter = (objFilter) => {
        const arrayFP = allLists.filter((item) => {
            if (objFilter.actionPage == 'FullTime') {
                if (item.jobType == 'FullTime') {
                    return item
                }
            }
            if (objFilter.actionPage == 'PartTime') {
                if (item.jobType == 'PartTime') {
                    return item
                }
            }
        })

        const arrayActive = arrayFP.filter((item) => {
            if (objFilter.activeChk == 'checked') {
                if (item.status == 'active') {
                    return item
                }
            } else {
                if (item.status == 'inactive') {
                    return item
                }
            }
        })

        if (objFilter.sortBy == 'create_at') {
            if (objFilter.sortPostChk == 'checked') {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,
                        diffDay(
                            job.createdAt
                                .split('T')[0]
                                .split('-')
                                .reverse()
                                .join('-'),
                            today
                        ),
                    ])
                }
                sortable.sort(function (a, b) {
                    return a[1] - b[1]
                })
                sortable.map((item) => {
                    x.push(item[0])
                })
                setShowHistory(x)
            } else {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,
                        diffDay(
                            job.createdAt
                                .split('T')[0]
                                .split('-')
                                .reverse()
                                .join('-'),
                            today
                        ),
                    ])
                }
                sortable.sort(function (a, b) {
                    return b[1] - a[1]
                })

                sortable.map((item) => {
                    x.push(item[0])
                })
                setShowHistory(x)
            }
        }

        if (objFilter.sortBy == 'startDate') {
            if (objFilter.sortJobChk == 'checked') {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,

                        diffDay(
                            job.jobType == 'FullTime'
                                ? job.FullTime?.startDate
                                      .split('T')[0]
                                      .split('-')
                                      .reverse()
                                      .join('-')
                                : job.PartTime?.startDate
                                      .split('T')[0]
                                      .split('-')
                                      .reverse()
                                      .join('-'),
                            today
                        ),
                    ])
                }
                sortable.sort(function (a, b) {
                    return b[1] - a[1]
                })

                sortable.map((item) => {
                    x.push(item[0])
                })
                setShowHistory(x)
            } else {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,
                        diffDay(
                            job.jobType == 'FullTime'
                                ? job.FullTime?.startDate
                                      .split('T')[0]
                                      .split('-')
                                      .reverse()
                                      .join('-')
                                : job.PartTime?.startDate
                                      .split('T')[0]
                                      .split('-')
                                      .reverse()
                                      .join('-'),
                            today
                        ),
                    ])
                }
                sortable.sort(function (a, b) {
                    return a[1] - b[1]
                })

                sortable.map((item) => {
                    x.push(item[0])
                })
                setShowHistory(x)
            }
        }
    }

    useEffect(() => {
        filter(objFilter)
    }, [activeChk, sortPostChk, actionPage, sortJobChk, sortBy, allLists])

    if (loading) {
        return <MyLoad />
    }

    return (
        <>
            <div className="w-[80%] mt-8 p-2 flex flex-row justify-center items-center gap-8 text-success">
                <div
                    className="cursor-pointer p-1"
                    onClick={() => hdlPageAction('PartTime')}
                >
                    {actionPage == 'PartTime' ? (
                        <h1 className="text-primary border border-x-0 border-t-0 border-b-primary pb-1">
                            Part-time
                        </h1>
                    ) : (
                        <h1
                            className={classTextPartTime}
                            onMouseEnter={hdlMouseEnterPt}
                            onMouseLeave={hdlTextPtEnter}
                        >
                            Part-time
                        </h1>
                    )}
                </div>
                <div
                    className="cursor-pointer p-1"
                    onClick={() => hdlPageAction('FullTime')}
                >
                    {actionPage == 'FullTime' ? (
                        <h1 className="text-primary border border-x-0 border-t-0 border-b-primary pb-1">
                            Full-time
                        </h1>
                    ) : (
                        <h1
                            className={classTextFullTime}
                            onMouseEnter={hdlTextFtEnter}
                            onMouseLeave={hdlMouseLeaveFt}
                        >
                            Full-time
                        </h1>
                    )}
                </div>
            </div>

            <div className=" w-[80%] mb-3 p-2 flex flex-row justify-between items-center gap-5">
                <div className="flex flex-row gap-5">
                    <label className="label cursor-pointer  gap-3">
                        <input
                            type="checkbox"
                            className="toggle toggle-success"
                            checked={activeChk}
                            onChange={hdlActiveOnChange}
                        />
                        <span className="label-text text-success text-base">
                            Active
                        </span>
                    </label>
                </div>
            </div>

            <HistoryModals />

            <div className="w-[80%] h-[650px] mb-3 p-2 text-success ">
                <div className=" bg-success rounded-lg flex flex-row  mb-2 p-2 gap-2 ">
                    <div className=" rounded-md w-[10%]  flex flex-row  justify-center items-center">
                        <h1 className="text-base-100"></h1>
                    </div>
                    <div
                        className=" rounded-md w-[15%]  flex justify-center items-center"
                        onClick={hdlSortJobDateOnChange}
                    >
                        <h1 className="text-base-100 cursor-pointer hover:text-primary">
                            Job Date
                        </h1>
                    </div>
                    <div className=" rounded-md w-[40%]  flex justify-center items-center">
                        <h1 className="text-base-100">Title</h1>
                    </div>
                    <div
                        className=" rounded-md  w-[10%]  flex justify-center items-center"
                        onClick={hdlSortPostDateOnChange}
                    >
                        <h1 className="text-base-100 cursor-pointer hover:text-primary">
                            Post Date
                        </h1>
                    </div>
                    <div className=" rounded-md w-[20%] flex justify-center items-center">
                        <h1 className="text-base-100">Management</h1>
                    </div>
                </div>

                <div className=" h-[500px] overflow-scroll">
                    {showHistory.map((item, index) => {
                        let follow = 0
                        if (item.DoctorJobs?.length == 0) {
                            follow = 0
                        } else {
                            follow = item.DoctorJobs?.length
                        }
                        return (
                            <div
                                key={index}
                                id={index}
                                className="bg-base-100 border border-success shadow-lg flex flex-row mb-1  p-1 gap-2 rounded-lg hover:bg-blue-100"
                            >
                                <div className=" w-[10%] flex flex-row justify-center">
                                    <HistoryStage stage={item.stage} />
                                </div>
                                <div className=" w-[15%]  flex flex-row  justify-center items-center">
                                    {item.jobType == 'FullTime'
                                        ? changeDateFormat(
                                              item.FullTime?.startDate,
                                              '-'
                                          )
                                        : changeDateFormat(
                                              item.PartTime?.startDate,
                                              '-'
                                          )}
                                </div>
                                <div className=" w-[40%]  flex flex-row  justify-center items-center">
                                    <h1>
                                        {item.title.length < 35
                                            ? item.title
                                            : item.title.slice(0, 35) + '...'}
                                    </h1>
                                </div>
                                <div className=" w-[10%]  flex flex-row  justify-center items-center">
                                    {item.jobType == 'FullTime'
                                        ? changeDateFormat(
                                              item.FullTime?.createdAt,
                                              '-'
                                          )
                                        : changeDateFormat(
                                              item.PartTime?.createdAt,
                                              '-'
                                          )}
                                </div>
                                <div className=" w-[20%]  flex justify-around items-center fill-success">
                                    <HistoryRowMenu
                                        follower={follow}
                                        title={item.title}
                                        objPost={item}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
