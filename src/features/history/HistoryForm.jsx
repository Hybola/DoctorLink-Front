import React, { useState } from 'react'
import { useEffect } from 'react'
import HistoryRowMenu from './HistoryRowMenu'
import HistoryModals from './HistoryModals'

export default function HistoryForm(props) {
    const { arrHistory } = props
    console.log('HistoryForm')
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
    const today = `${day}/${month}/${year}`

    const [activeChk, setActiveChk] = useState('checked')
    const [sortPostChk, setsortPostChk] = useState('checked')
    const [sortJobChk, setsortJobChk] = useState('checked')
    const [showHistory, setShowHistory] = useState([])
    const [classTextFullTime, setClassTextFullTime] = useState('')
    const [classTextPartTime, setClassTextPartTime] = useState('')
    const [actionPage, setActionPage] = useState('part-time')
    const [sortBy, setSortBy] = useState('create_at')

    const diffDay = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000
        const arrCreate = start.split('/')
        const arrToday = end.split('/')

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
        console.log('hdlActiveOnChange')
        activeChk == 'checked' ? setActiveChk('') : setActiveChk('checked')
    }
    const hdlSortPostDateOnChange = () => {
        console.log('hdlSortPostDateOnChange')
        setSortBy('create_at')
        sortPostChk == 'checked'
            ? setsortPostChk('')
            : setsortPostChk('checked')
    }

    const hdlSortJobDateOnChange = () => {
        console.log('hdlSortJobDateOnChange')
        setSortBy('startDate')
        sortJobChk == 'checked' ? setsortJobChk('') : setsortJobChk('checked')
    }

    const hdlPageAction = (page) => {
        if (page == 'full-time') {
            setClassTextPartTime('')
        } else {
            setClassTextFullTime('')
        }
        setActionPage(page)
    }

    const hdlTextFtEnter = () => {
        console.log('hdlMouseEnter')
        const cn = 'text-primary'
        setClassTextFullTime(cn)
    }
    const hdlMouseLeaveFt = () => {
        console.log('hdlMouseLeave')
        const cn = ''
        setClassTextFullTime(cn)
    }
    const hdlMouseEnterPt = () => {
        console.log('hdlMouseEnter')
        const cn = 'text-primary'
        setClassTextPartTime(cn)
    }
    const hdlTextPtEnter = () => {
        console.log('hdlMouseLeave')
        const cn = ''
        setClassTextPartTime(cn)
    }

    const filter = (objFilter) => {
        const arrayFP = arrHistory.filter((item) => {
            if (objFilter.actionPage == 'full-time') {
                if (item.jobType == 'full-time') {
                    return item
                }
            }
            if (objFilter.actionPage == 'part-time') {
                if (item.jobType == 'part-time') {
                    return item
                }
            }
        })
        const arrayActive = arrayFP.filter((item) => {
            if (objFilter.activeChk == 'checked') {
                if (item.status == 'Active') {
                    return item
                }
            } else {
                if (item.status == 'Inactive') {
                    return item
                }
            }
        })

        if (objFilter.sortBy == 'create_at') {
            console.log('randerxxxx')

            if (objFilter.sortPostChk == 'checked') {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,
                        diffDay(job.create_at.split(' ')[0], today),
                    ])
                }
                sortable.sort(function (a, b) {
                    return a[1] - b[1]
                })
                console.log(sortable)
                sortable.map((item) => {
                    console.log(item[0])
                    x.push(item[0])
                })
                setShowHistory(x)
            } else {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([
                        job,
                        diffDay(job.create_at.split(' ')[0], today),
                    ])
                }
                sortable.sort(function (a, b) {
                    return b[1] - a[1]
                })
                console.log(sortable)
                sortable.map((item) => {
                    console.log(item[0])
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
                    sortable.push([job, diffDay(job.startDate, today)])
                }
                sortable.sort(function (a, b) {
                    return b[1] - a[1]
                })
                console.log(sortable)
                sortable.map((item) => {
                    console.log(item[0])
                    x.push(item[0])
                })
                setShowHistory(x)
            } else {
                let sortable = []
                let x = []
                for (let job of arrayActive) {
                    sortable.push([job, diffDay(job.startDate, today)])
                }
                sortable.sort(function (a, b) {
                    return a[1] - b[1]
                })
                console.log(sortable)
                sortable.map((item) => {
                    console.log(item[0])
                    x.push(item[0])
                })
                setShowHistory(x)
            }
        }
    }

    useEffect(() => {
        filter(objFilter)
        console.log(objFilter)
    }, [activeChk, sortPostChk, actionPage, sortJobChk, sortBy])
    return (
        <>
            <div className="w-[80%] mt-3 p-2 flex flex-row justify-center items-center gap-8">
                <div
                    className="cursor-pointer"
                    onClick={() => hdlPageAction('part-time')}
                >
                    {actionPage == 'part-time' ? (
                        <h1 className="text-primary">PartTime</h1>
                    ) : (
                        <h1
                            className={classTextPartTime}
                            onMouseEnter={hdlMouseEnterPt}
                            onMouseLeave={hdlTextPtEnter}
                        >
                            PartTime
                        </h1>
                    )}
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => hdlPageAction('full-time')}
                >
                    {actionPage == 'full-time' ? (
                        <h1 className="text-primary">FullTime</h1>
                    ) : (
                        <h1
                            className={classTextFullTime}
                            onMouseEnter={hdlTextFtEnter}
                            onMouseLeave={hdlMouseLeaveFt}
                        >
                            FullTime
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
                        <span className="label-text">On</span>
                    </label>
                </div>
            </div>
            <HistoryModals />

            {/* You can open the modal using ID.showModal() method */}

            <div className="w-[80%] h-[650px] mb-3 p-2 text-black ">
                <div className=" bg-primary rounded-lg flex flex-row  mb-2 p-2 gap-2 ">
                    <div
                        className=" rounded-md w-[15%]  flex flex-row  justify-center items-center  hover:bg-blue-200"
                        onClick={hdlSortJobDateOnChange}
                    >
                        <h1 className="text-base-100">[JobDate]Sort</h1>
                    </div>
                    <div className=" rounded-md w-[40%]  flex flex-row  justify-center items-center">
                        <h1 className="text-base-100">[Title]</h1>
                    </div>
                    <div
                        className=" rounded-md  w-[15%]  flex flex-row  justify-center items-center  hover:bg-blue-200"
                        onClick={hdlSortPostDateOnChange}
                    >
                        <h1 className="text-base-100">[PostDate]Sort</h1>
                    </div>
                    <div className=" rounded-md w-[30%]  flex flex-row  justify-center items-center">
                        <h1 className="text-base-100">[Management]</h1>
                    </div>
                </div>

                <div className=" h-[500px] overflow-scroll">
                    {showHistory.map((item, index) => {
                        const dh = diffDay(item.create_at.split(' ')[0], today)

                        return (
                            <div
                                key={index}
                                id={index}
                                className="bg-base-100 border border-primary shadow-lg flex flex-row mb-1  p-1 gap-2 rounded-lg hover:bg-teal-100"
                            >
                                <div className=" w-[15%]  flex flex-row  justify-center items-center">
                                    <h1>{item.startDate}</h1>
                                </div>
                                <div className=" w-[40%]  flex flex-row  justify-center items-center">
                                    <h1>
                                        {item.title.length < 35
                                            ? item.title
                                            : item.title.slice(0, 35) + '...'}
                                    </h1>
                                </div>
                                <div className=" w-[15%]  flex flex-row  justify-center items-center">
                                    <h1>{item.create_at.split(' ')[0]}</h1>
                                </div>
                                <HistoryRowMenu follower={item.follower} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
