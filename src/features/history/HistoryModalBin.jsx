import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
    getLists,
    confirmCloseJobByGetDoctor,
    confirmCloseJobByNoDoctor,
} from './slice/history-slice'
import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
export default function HistoryModalBin() {
    // const title = useSelector((state) => state.history.titleSelected)
    const doctorSelected = useSelector((state) => state.history.doctorSelected)
    const objPost = useSelector((state) => state.history.objSelected)
    const allLists = useSelector((state) => state.history.allLists)
    const [arrSelected, setArrSelected] = useState([])
    const dispatch = useDispatch()
    // dispatch(getJob(1)).unwrap()
    // useEffect(() => {
    //     console.log('useEffect')
    //     dispatch(getJob({ id: 1 })).unwrap()
    //     console.log(objPost)
    // }, [])
    // const myArray = dispatch(getJob({ id: objPost.id })).unwrap()
    // console.log(objPost)
    // console.log(objPost.id)

    // useEffect(() => {
    // dispatch(getJob({ id: objPost.id })).unwrap()
    // }, [])
    // dispatch(getJob({ id: 1 })).unwrap()
    // console.log(doctorSelected)
    // console.log(doctorSelected[0]?.id)

    const mobileFormat = (mobile) => {
        if (mobile) {
            return (
                mobile.slice(0, 3) +
                '-' +
                mobile.slice(3, 6) +
                '-' +
                mobile.slice(6, 10)
            )
        } else {
            return ''
        }
    }
    const filterSelectedDoctor = doctorSelected[0]?.DoctorJobs?.filter(
        (item) => {
            if (item.status == 3) {
                return item
            }
        }
    )

    const changeColor = (name) => {
        const div = document.getElementById('hideme')
        div.style.backgroundColor = 'red'
    }
    const handleConfirm = () => {
        filterSelectedDoctor?.length > 0
            ? dispatch(
                  confirmCloseJobByGetDoctor({
                      id: objPost.id,
                      allList: allLists,
                  })
              ).unwrap()
            : dispatch(
                  confirmCloseJobByNoDoctor({
                      id: objPost.id,
                      allList: allLists,
                  })
              ).unwrap()
    }

    return (
        <>
            <dialog id="BinJob" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>

                    <div>
                        <h3 className="font-bold text-lg">
                            Case{': '}
                            {objPost.title?.length > 40
                                ? objPost.title.slice(0, 40) + '...'
                                : objPost.title}
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5 mt-5">
                        {filterSelectedDoctor?.length == 0 ? (
                            <h1 className=" text-orange-300">
                                ยืนยันการยกเลิกรายการ!
                            </h1>
                        ) : (
                            <h1>รวมหมอ {filterSelectedDoctor?.length} ท่าน</h1>
                        )}

                        {filterSelectedDoctor?.map((item, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        className="flex flex-row justify-start items-center gap-3"
                                    >
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={
                                                        item.Doctor.profileImage
                                                    }
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h2>หมอ</h2>
                                        </div>
                                        <div>
                                            {item.Doctor?.firstName +
                                                ' ' +
                                                item.Doctor?.lastName}
                                        </div>
                                        <div>
                                            {mobileFormat(item.Doctor?.mobile)}
                                        </div>
                                        <div>
                                            <span className="badge badge-success badge-md mt-1">
                                                {item.Doctor?.lineId}
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    <div className=" flex flex-row justify-end mt-4">
                        <div>
                            <button
                                className="btn btn-primary text-white"
                                type="button"
                                onClick={handleConfirm}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
