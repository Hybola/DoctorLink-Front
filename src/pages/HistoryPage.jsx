import React, { useState } from 'react'
import { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function History() {
    const arrHistory = [
        {
            id: 1,
            title: 'แผนก ฉุกเฉิน',
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
            startDate: '18/12/2021',
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
            startDate: '16/12/2021',
            endDate: '16/12/2021',
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
            startDate: '14/12/2021',
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
    const [startDate, setStartDate] = useState(new Date('01/01/2023'))
    const [endDate, setEndDate] = useState(newDate)

    const [fullTimeChk, setFullTimeChk] = useState('checked')
    const [pathTimeChk, setPathTimeChk] = useState('checked')
    const [activeChk, setActiveChk] = useState('checked')
    const [sortChk, setSortChk] = useState('checked')

    const [inputSearch, setInputSearch] = useState('')
    const [showHistory, setShowHistory] = useState([])

    // const pastTime = (create_add, today) => {
    //     const oneDay = 24 * 60 * 60 * 1000
    //     const arrCreate = create_add.split('/')
    //     const arrToday = today.split('/')

    //     const firstDate = new Date(arrCreate[2], arrCreate[1], arrCreate[0])
    //     const secondDate = new Date(arrToday[2], arrToday[1], arrToday[0])
    //     const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
    //     if (diffDays == 0) {
    //         return 'now'
    //     } else {
    //         if (diffDays > 30) {
    //             return create_add
    //         } else {
    //             return `${diffDays}d`
    //         }
    //     }
    // }
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
        startDate: new Date(startDate).toLocaleDateString('en-GB'),
        endDate: new Date(endDate).toLocaleDateString('en-GB'),
        fullTimeChk: fullTimeChk,
        pathTimeChk: pathTimeChk,
        activeChk: activeChk,
        sortChk: sortChk,
        inputSearch: inputSearch,
        diffDay: diffDay(
            new Date(startDate).toLocaleDateString('en-GB'),
            new Date(endDate).toLocaleDateString('en-GB')
        ),
    }
    const hdlFtOnChange = () => {
        console.log('hdlFtOnChange')

        fullTimeChk == 'checked'
            ? setFullTimeChk('')
            : setFullTimeChk('checked')
    }
    const hdlPtOnChange = () => {
        console.log('hdlPtOnChange')
        pathTimeChk == 'checked'
            ? setPathTimeChk('')
            : setPathTimeChk('checked')
    }
    const hdlActiveOnChange = () => {
        console.log('hdlActiveOnChange')
        activeChk == 'checked' ? setActiveChk('') : setActiveChk('checked')
    }
    const hdlSortOnChange = () => {
        console.log('hdlSortOnChange')
        sortChk == 'checked' ? setSortChk('') : setSortChk('checked')
    }

    const hdlSearchOnChange = (event) => {
        setInputSearch(event.target.value)
    }

    const filter = (objFilter) => {
        const arrayFP = arrHistory.filter((item) => {
            if (objFilter.fullTimeChk == 'checked') {
                if (item.jobType == 'full-time') {
                    return item
                }
            }
            if (objFilter.pathTimeChk == 'checked') {
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

        if (objFilter.sortChk == 'checked') {
            const x = arrayActive.sort((a, b) => {
                return diffDay(b.create_at, today) - diffDay(a.create_at, today)
            })
            setShowHistory(x)
        } else {
            const x = arrayActive.reverse((a, b) => {
                return diffDay(a.create_at, today) - diffDay(b.create_at, today)
            })
            setShowHistory(x)
        }

        setShowHistory(arrayActive)
    }

    useEffect(() => {
        filter(objFilter)
        console.log(objFilter)
    }, [fullTimeChk, pathTimeChk, activeChk, sortChk, inputSearch])

    return (
        <div className=" bg-gray-200  w-[100vw] h-[100vh] flex flex-col justify-start items-center">
            <div className="bg-blue-400 w-[80%] mt-3 p-2 flex flex-row justify-between items-center">
                <div className=" flex flex-row items-center  ">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            // const d = new Date(date).toLocaleDateString('fr-FR');
                            // console.log(d);
                            setStartDate(date)
                        }}
                        dateFormat={'dd/MM/yyyy'}
                    />
                    <h1 className="text-black ml-6 mr-6">-To-</h1>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat={'dd/MM/yyyy'}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-success w-[300px] h-8"
                    onChange={hdlSearchOnChange}
                />
            </div>

            <div className="bg-green-200 w-[80%] mb-3 p-2 flex flex-row justify-between items-center gap-5">
                <div className="flex flex-row gap-5">
                    <label className="label cursor-pointer  gap-3">
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
                    </label>

                    <label className="label cursor-pointer  gap-3">
                        <input
                            type="checkbox"
                            className="toggle toggle-success"
                            checked={activeChk}
                            onChange={hdlActiveOnChange}
                        />
                        <span className="label-text">Active</span>
                    </label>
                    <label className="label cursor-pointer  gap-3">
                        <input
                            type="checkbox"
                            className="toggle toggle-success"
                            checked={sortChk}
                            onChange={hdlSortOnChange}
                        />
                        <span className="label-text">Sort</span>
                    </label>
                </div>
                <div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
            <div className="bg-red-200 w-[80%] h-[650px] mb-3 p-2 text-black">
                <h1>history</h1>
                {showHistory.map((item, index) => {
                    const dh = diffDay(item.create_at.split(' ')[0], today)

                    return (
                        <>
                            <div className="flex flex-row  bg-green-300 m-2 p-1 gap-2">
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
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
