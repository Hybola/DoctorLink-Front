import { useSelector } from 'react-redux'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
    getDoctorSelectedResult,
    getLists,
    updateSelectedDoctor,
    getObjSelected,
    getJob,
} from './slice/history-slice'
import { useEffect } from 'react'
import { all } from 'axios'
import MyLoad from '../../components/Loading'
import { useNavigate } from 'react-router-dom'
export default function HistoryModalGroup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const allLists = useSelector((state) => state.history.allLists)
    const getJobResult = useSelector((state) => state.history.getJobResult)
    const objPost = useSelector((state) => state.history.objSelected)
    const loading = useSelector((state) => state.history?.loading)
    const [arrChecked, setArrChecked] = React.useState([])
    const [count, setCount] = React.useState(0)

    const newObjPost = { ...getJobResult[0] }

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
    const handleCheckbox = async (e) => {
        dispatch(getJob({ id: newObjPost.id })).unwrap()
        const value = JSON.parse(e.target.value)

        value.status = e.target.checked ? 3 : 1

        const myIndex = newObjPost.DoctorJobs.findIndex(
            (item) => item.id == value.id
        )

        const newDoctorJobs = [...newObjPost.DoctorJobs]
        newDoctorJobs.splice(myIndex, 1, value)
        newObjPost.DoctorJobs = newDoctorJobs

        await dispatch(getObjSelected(newObjPost)).unwrap()
        await dispatch(getDoctorSelectedResult(newObjPost)).unwrap()
        await dispatch(
            updateSelectedDoctor({ id: value.id, status: value.status })
        ).unwrap()

        await dispatch(getJob({ id: newObjPost.id })).unwrap()
    }

    useEffect(() => {
        if (count == 0) {
            newObjPost.DoctorJobs?.map((item) => {})
        }
    }, [newObjPost, count])

    if (loading) {
        return <MyLoad />
    }
    return (
        <>
            <dialog id="GroupJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>

                    <div className="flex flex-col ">
                        <div className="w-fit text-xl self-center font-bold mb-4">
                            Group Job
                        </div>

                        <div className="overflow-x-auto  h-[650px]">
                            <table className="table text-base">
                                {/* head */}
                                <thead>
                                    <tr className="font-light">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Last</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {newObjPost.DoctorJobs?.map(
                                        (item, index) => (
                                            <>
                                                <tr>
                                                    <td>
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img
                                                                    src={
                                                                        item
                                                                            .Doctor
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
                                                                        item
                                                                            .Doctor
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
                                                                      .split(
                                                                          'T'
                                                                      )[0]
                                                                      .split(
                                                                          '-'
                                                                      )
                                                                      .reverse()
                                                                      .join(
                                                                          '-'
                                                                      ),
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
                                                            <button
                                                                className="btn btn-primary btn-xs text-white h-[40px]"
                                                                onClick={() => {
                                                                    navigate(
                                                                        '/provider/chat',
                                                                        {
                                                                            state: {
                                                                                id: 10,
                                                                                name: 'Chee',
                                                                                profileImage:
                                                                                    '',
                                                                            },
                                                                        }
                                                                    )
                                                                }}
                                                            >
                                                                Chat
                                                            </button>

                                                            <input
                                                                type="checkbox"
                                                                className="checkbox checkbox-accent"
                                                                id={item.id}
                                                                checked={
                                                                    item.status ==
                                                                    3
                                                                        ? true
                                                                        : false
                                                                }
                                                                value={JSON.stringify(
                                                                    item
                                                                )}
                                                                onClick={
                                                                    handleCheckbox
                                                                }
                                                            />
                                                        </div>
                                                    </th>
                                                </tr>
                                            </>
                                        )
                                    )}
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
                    </div>
                </form>
            </dialog>
        </>
    )
}
