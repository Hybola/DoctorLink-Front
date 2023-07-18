import { useSelector, useDispatch } from 'react-redux'
import { getLists, getJob, getProviderProfile } from './slice/history-slice'
import { useEffect } from 'react'
import Work from '../addpost/Work'
import { dateTimeTH } from '../../utils/dateTime'
import {
    MapIcon,
    BagIcon,
    DescriptionIcon,
    StartDateIcon,
    SalaryIcon,
    Phone,
    LineLIcon,
    WorkingDate,
    WageIcon,
} from '../../icons'

export default function HistoryModalPreview() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const myPro = useSelector((state) => state.history.myProfile)
    const jobSelected = useSelector((state) => state.history.getJobResult)
    const convertDate = (inputDate, jobType) => {
        if (jobType == 'FullTime') {
            const day = inputDate.split('T')[0]

            return day.split('-').reverse().join('/')
        } else {
            const day = inputDate.split('T')[0]
            const arrTime = inputDate.split('T')[1].split(':')
            return (
                day.split('-').reverse().join('/') +
                ' ' +
                arrTime[0] +
                ':' +
                arrTime[1]
            )
        }
    }
    // console.log('getJobResult', jobSelected)
    const p = jobSelected[0]?.jobType
    useEffect(() => {
        dispatch(getProviderProfile({ id: user.id })).unwrap()
    }, [])

    const newObject = {
        ...jobSelected,
    }

    let myObj = {
        ...newObject[0],
        jobDes:
            newObject[0]?.FullTime?.jobDes || newObject[0]?.PartTime?.jobDes,
    }
    myObj = {
        ...myObj,
        startDate:
            Date.now(myObj?.FullTime?.startDate) ||
            Date.now(myObj?.PartTime?.startDate),
    }
    myObj = {
        ...myObj,
        endDate: Date.now(myObj?.PartTime?.startDate),
    }

    myObj =
        p == 'FullTime'
            ? { ...myObj, salary: myObj?.FullTime?.salary }
            : { ...myObj, wage: myObj?.PartTime?.wage }

    myObj =
        p == 'FullTime'
            ? { ...myObj, other: myObj?.FullTime?.other }
            : { ...myObj, other: myObj?.PartTime?.other }

    //console.log(myObj)

    return (
        <>
            <dialog id="PreviewJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base font-semibold text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <Work post={myObj} p={myObj?.jobType} />

                    <div className="modal-action mr-4">
                        <button
                            className="btn w-[120px] text-base"
                            style={{ textTransform: 'none' }}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )
}
