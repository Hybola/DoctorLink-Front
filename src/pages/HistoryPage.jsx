import React, { useState } from 'react'
import { useEffect } from 'react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import {
    AddPostIcon,
    FollowerIcon,
    HistoryIcon,
    NotificationIcon,
    SavedJobIcon,
    SearchHomeIcon,
    PreviewJob,
    EditJob,
    BinJob,
    GroupJob,
} from '../icons/index'

export default function History() {
    const arrHistory = [
        {
            id: 1,
            title: 'แผนก ฉุกเฉิน xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            jobType: 'part-time',
            startDate: '20/06/2023',
            endDate: '20/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '20/06/2023 10:00:00',
        },
        {
            id: 2,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '15/01/2023',
            endDate: '18/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '15/06/2023 10:00:00',
        },
        {
            id: 3,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 4,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '18/12/2021',
            endDate: '19/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '20/12/2021 10:00:00',
        },
        {
            id: 5,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '15/12/2021',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '30/05/2021 10:00:00',
        },
        {
            id: 6,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '18/01/2023',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '29/05/2021 10:00:00',
        },
        {
            id: 7,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '16/12/2021',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '28/05/2021 10:00:00',
        },
        {
            id: 8,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '14/12/2021 ',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '27/05/2021 10:00:00',
        },
        {
            id: 9,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '16/01/2023',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '27/05/2021 10:00:00',
        },
        {
            id: 10,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 11,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 12,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 13,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 14,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 15,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 16,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 17,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 18,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 19,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 20,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 21,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 22,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 23,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 24,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 25,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 26,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 27,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 28,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 29,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 30,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'part-time',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'รอการตอบรับ',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            create_at: '10/06/2023 10:00:00',
        },
    ]
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
    // const adapter = new AdapterDayjs()
    // const [startDate, setStartDate] = useState(adapter.date('01/01/2023'))
    // const [endDate, setEndDate] = useState(adapter.date(newDate))
    // const [startDate, setStartDate] = useState()
    // const [endDate, setEndDate] = useState(newDate)

    const [fullTimeChk, setFullTimeChk] = useState('checked')
    const [pathTimeChk, setPathTimeChk] = useState('checked')
    const [activeChk, setActiveChk] = useState('checked')
    const [sortPostChk, setsortPostChk] = useState('checked')
    const [sortJobChk, setsortJobChk] = useState('checked')
    const [enterId, setEnterId] = useState('10000')

    const [inputSearch, setInputSearch] = useState('')
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
    const textDate = (hrs, date) => {
        if (hrs == 0) {
            return 'now'
        } else {
            if (hrs > 30) {
                return date
            } else {
                return `${hrs}d`
            }
        }
    }

    const objFilter = {
        // startDate: new Date(startDate).toLocaleDateString('en-GB'),
        // endDate: new Date(endDate).toLocaleDateString('en-GB'),
        actionPage: actionPage,
        // fullTimeChk: fullTimeChk,
        // pathTimeChk: pathTimeChk,
        sortJobChk: sortJobChk,
        sortBy: sortBy,
        activeChk: activeChk,
        sortPostChk: sortPostChk,
        inputSearch: inputSearch,
        // diffDay: diffDay(
        //     new Date(startDate).toLocaleDateString('en-GB'),
        //     new Date(endDate).toLocaleDateString('en-GB')
        // ),
    }
    const hdlFtOnChange = () => {
        console.log('hdlFtOnChange')

        // fullTimeChk == 'checked'
        //     ? setFullTimeChk('')
        //     : setFullTimeChk('checked')
    }
    const hdlPtOnChange = () => {
        console.log('hdlPtOnChange')
        // pathTimeChk == 'checked'
        //     ? setPathTimeChk('')
        //     : setPathTimeChk('checked')
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

    // const hdlSearchOnChange = (event) => {
    //     setInputSearch(event.target.value)
    // }
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
    const hdlRowEnter = (id) => {
        console.log('hello id', id)
        setEnterId(id)
        // event.target.className.remove('bg-slate-100')
        // event.target.className.add('bg-blue-300')
        // event.target.className.replace('bg-slate-100', 'bg-blue-300')
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
            // if (objFilter.sortPostChk == 'checked') {
            //     const x = arrayActive.sort((a, b) => {
            //         return (
            //             diffDay(b.create_at, today) -
            //             diffDay(a.create_at, today)
            //         )
            //     })
            //     setShowHistory(x)
            // } else {
            //     const x = arrayActive.reverse((a, b) => {
            //         return (
            //             diffDay(a.create_at, today) -
            //             diffDay(b.create_at, today)
            //         )
            //     })
            //     setShowHistory(x)
            // }
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
            // setShowHistory(arrayActive)
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
    }, [
        fullTimeChk,
        pathTimeChk,
        activeChk,
        sortPostChk,
        inputSearch,
        actionPage,
        sortJobChk,
        sortBy,
    ])

    return (
        <div
            className="  w-[100vw] h-[100vh] flex flex-col justify-start items-center"
            onMouseEnter={() => {}}
        >
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
                    {/* <label className="label cursor-pointer  gap-3">
                        <input
                            type="checkbox"
                            checked={fullTimeChk}
                            className="checkbox"
                            onChange={hdlFtOnChange}
                        />
                        <span className="label-text">FT</span>
                    </label>

                    <label className="label cursor-pointer  gap-3">
                        <input
                            type="checkbox"
                            checked={pathTimeChk}
                            className="checkbox"
                            onChange={hdlPtOnChange}
                        />
                        <span className="label-text">PT</span>
                    </label> */}

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

            <dialog id="PreviewJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] "
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <div className=" ">
                        <h3 className="font-bold text-lg">Preview Job</h3>
                    </div>
                </form>
            </dialog>

            <dialog id="BinJob" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>

                    <div>
                        <h3 className="font-bold text-lg">Confirm Delete</h3>
                    </div>

                    <div className=" flex flex-row justify-end">
                        <div>
                            <button className="btn btn-primary text-white">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
            <dialog id="GroupJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] "
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                    <div className=" ">
                        <h3 className="font-bold text-lg">Group Job</h3>
                    </div>
                </form>
            </dialog>

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
                            <>
                                <div
                                    // onMouseEnter={() => hdlRowEnter(index)}
                                    // onMouseLeave={() => hdlMouseLeave(index)}
                                    key={index}
                                    id={index}
                                    // className={
                                    //     index == enterId
                                    //         ? 'bg-slate-300 flex flex-row mb-1  p-1 gap-2 rounded-lg'
                                    //         : 'bg-slate-100 flex flex-row mb-1  p-1 gap-2 rounded-lg'
                                    // }
                                    className="bg-base-100 border border-primary shadow-lg flex flex-row mb-1  p-1 gap-2 rounded-lg hover:bg-teal-100"
                                >
                                    <div className=" w-[15%]  flex flex-row  justify-center items-center">
                                        <h1>{item.startDate}</h1>
                                    </div>
                                    <div className=" w-[40%]  flex flex-row  justify-center items-center">
                                        <h1>
                                            {item.title.length < 35
                                                ? item.title
                                                : item.title.slice(0, 35) +
                                                  '...'}
                                        </h1>
                                    </div>
                                    <div className=" w-[15%]  flex flex-row  justify-center items-center">
                                        <h1>{item.create_at.split(' ')[0]}</h1>
                                    </div>

                                    <div className=" w-[30%]  flex flex-row justify-around items-center">
                                        <div
                                            className="cursor-pointer "
                                            onClick={() =>
                                                window.PreviewJob.showModal()
                                            }
                                        >
                                            <h1>
                                                <PreviewJob
                                                    height="1.5rem"
                                                    width="1.5rem"
                                                />
                                            </h1>
                                        </div>
                                        <div className="cursor-pointer ">
                                            <h1>
                                                <EditJob
                                                    height="1.5rem"
                                                    width="1.5rem"
                                                />
                                            </h1>
                                        </div>
                                        <div
                                            className="cursor-pointer "
                                            onClick={() =>
                                                window.BinJob.showModal()
                                            }
                                        >
                                            <BinJob
                                                height="1.5rem"
                                                width="1.5rem"
                                            />
                                        </div>
                                        <div
                                            className="cursor-pointer "
                                            onClick={() =>
                                                window.GroupJob.showModal()
                                            }
                                        >
                                            <GroupJob
                                                height="1.5rem"
                                                width="1.5rem"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex flex-row  bg-green-300 m-2 p-1 gap-2">
                                <div>[{item.jobType}]</div>
                                <div>[{item.statusDetail}]</div>
                                <div>[{item.title}]</div>
                                <div>[{item.startDate}]</div>
                                <div>
                                    [
                                    {item.startTime.slice(0, -3) +
                                        '-' +
                                        item.endTime.slice(0, -3)}
                                    ]
                                </div>
                                <div>
                                    [
                                    {textDate(dh, item.create_at.split(' ')[0])}
                                    ]
                                </div>
                                <div>[{item.status}]</div>
                            </div> */}
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
