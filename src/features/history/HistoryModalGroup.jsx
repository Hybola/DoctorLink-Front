import { useSelector } from 'react-redux'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
    getLists,
    updateSelectedDoctor,
    getObjSelected,
    getJob,
} from './slice/history-slice'
import { useEffect } from 'react'
import { all } from 'axios'
import MyLoad from '../../components/Loading'
export default function HistoryModalGroup() {
    const dispatch = useDispatch()
    // const allLists = useSelector((state) => state.history.allLists)
    const objUser = useSelector((state) => state.history.objSelected)
    const loading = useSelector((state) => state.history?.loading)
    const [arrChecked, setArrChecked] = React.useState([])
    const [index, setIndex] = React.useState(0)
    const [checked, setChecked] = React.useState()
    let myArray = []

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

    const diffDay = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000
        const arrCreate = start.split('-')
        const arrToday = end.split('-')

        const firstDate = new Date(arrCreate[2], arrCreate[1], arrCreate[0])
        const secondDate = new Date(arrToday[2], arrToday[1], arrToday[0])
        const diffDays = Math.round((secondDate - firstDate) / oneDay)

        return diffDays
    }
    const handleCheckbox = (e) => {
        const id = e.target.id
        const value = JSON.parse(e.target.value)
        setIndex(index + 1)
        if (e.target.checked) {
            console.log('checked')
            setChecked('')
            myArray = arrChecked
            myArray[value.index] = 3
            console.log(myArray)
            setArrChecked(myArray)

            // console.log({ id: id, status: 3 })
            dispatch(updateSelectedDoctor({ id: id, status: 3 })).unwrap()

            // setChecked(arrChecked)
        } else {
            console.log('uncheck')
            setChecked('checked')
            myArray = arrChecked
            myArray[value.index] = 1
            console.log(myArray)
            setArrChecked(myArray)
            // console.log({ id: id, status: 1 })
            dispatch(updateSelectedDoctor({ id: id, status: 1 })).unwrap()

            // setChecked(arrChecked)
        }

        // console.log('index', value.index)
        // console.log('event', checked)
    }

    useEffect(() => {
        // console.log('useEffect-checked')
        if (index == 0) {
            objUser.DoctorJobs?.map((item) => {
                // console.log(item)
                // console.log(item.status)
                myArray.push(item.status)
            })
            setArrChecked(myArray)
        } else {
            myArray = arrChecked
        }
        // console.log('myArray', myArray)
        // console.log(index)
    }, [objUser, index])

    // console.log('myArray', myArray)
    // console.log('arrChecked', arrChecked)
    // console.log('objUser', objUser)

    if (loading) {
        return <MyLoad />
    }
    return (
        <>
            <dialog id="GroupJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[850px] "
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>

                    <div className="flex flex-col ">
                        <h3 className="font-bold text-lg">Group Job</h3>
                        {/* <div className="overflow-x-auto"> */}
                        <div className="overflow-x-auto h-[650px]">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Last</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {objUser.DoctorJobs?.map((item, index) => (
                                        <>
                                            <tr>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img
                                                                src={
                                                                    item.Doctor
                                                                        ?.profileImage
                                                                }
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                หมอ{' '}
                                                                {item.Doctor
                                                                    ?.firstName +
                                                                    ' ' +
                                                                    item.Doctor
                                                                        ?.lastName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {item.Doctor.mobile}
                                                    <br />
                                                    <span className="badge badge-success badge-md mt-1">
                                                        line:{' '}
                                                        {item.Doctor.lineId}
                                                    </span>
                                                </td>
                                                <td>
                                                    {diffDay(
                                                        item.createdAt
                                                            .split('T')[0]
                                                            .split('-')
                                                            .reverse()
                                                            .join('-'),
                                                        today
                                                    ) < 30
                                                        ? diffDay(
                                                              item.createdAt
                                                                  .split('T')[0]
                                                                  .split('-')
                                                                  .reverse()
                                                                  .join('-'),
                                                              today
                                                          ) + ' d'
                                                        : item.createdAt
                                                              .split('T')[0]
                                                              .split('-')
                                                              .reverse()
                                                              .join('-')}
                                                </td>
                                                <th>
                                                    <div className="flex flex-row justify-center items-center gap-5">
                                                        <button className="btn btn-primary btn-xs text-white h-[40px]">
                                                            Chat
                                                        </button>

                                                        <input
                                                            type="checkbox"
                                                            className="checkbox checkbox-accent"
                                                            id={item.id}
                                                            checked={
                                                                arrChecked[
                                                                    index
                                                                ] == 3
                                                                    ? true
                                                                    : false
                                                            }
                                                            // my
                                                            value={JSON.stringify(
                                                                {
                                                                    id: item.id,
                                                                    index: index,
                                                                }
                                                            )}
                                                            onClick={
                                                                handleCheckbox
                                                            }
                                                        />
                                                    </div>
                                                </th>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Last</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="w-[100%] h-[100px] flex flex-row justify-end items-center ">
                            <button className="btn btn-primary btn-sm h-[50px] ">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
