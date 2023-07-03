import { PreviewJob, EditJob, BinJob, GroupJob, PowerJob } from '../../icons'
import { useDispatch, useSelector } from 'react-redux'
import { getObjSelected, getTitleSelected, getJob } from './slice/history-slice'
import { useEffect } from 'react'

export default function RowMenu({ follower, title, objUser }) {
    // console.log(title)
    const dispatch = useDispatch()
    // console.log(objUser)
    // useEffect(() => {
    //     dispatch(getObjSelected(objUser)).unwrap()
    // }, [])

    const handleBinJob = (e) => {
        e.preventDefault()
        // console.log(e.target.attributes.value.value)
        // dispatch(getTitleSelected(e.target.attributes.value.value)).unwrap()

        dispatch(getObjSelected(objUser)).unwrap()
        dispatch(getJob({ id: objUser?.id })).unwrap()
        window.BinJob.showModal()
    }
    const handleGroupJob = (e) => {
        e.preventDefault()
        // console.log(e.target.attributes.value.value)
        // dispatch(getTitleSelected(e.target.attributes.value.value)).unwrap()
        dispatch(getObjSelected(objUser)).unwrap()
        // console.log('777788889999', objUser)
        window.GroupJob.showModal()
    }

    return (
        <>
            {/* <HistoryModals /> */}

            <div
                className="cursor-pointer "
                onClick={() => window.PreviewJob.showModal()}
            >
                <h1>
                    <PreviewJob height="1.5rem" width="1.5rem" />
                </h1>
            </div>
            <div
                className="cursor-pointer "
                onClick={() => window.EditJob.showModal()}
            >
                <h1>
                    <EditJob height="1.5rem" width="1.5rem" />
                </h1>
            </div>

            <div className="cursor-pointer ">
                {/* <GroupJob height="1.5rem" width="1.5rem" /> */}
                <div className="indicator">
                    {follower > 0 ? (
                        <>
                            <span
                                className="indicator-item indicator-middle  badge badge-secondary bg-red-400 text-white "
                                onClick={handleGroupJob}
                                style={{
                                    height: '1.5rem',
                                    width: '1.5rem',
                                    fontSize: '0.7rem',
                                }}
                            >
                                {follower > 9 ? '+9' : follower}
                            </span>
                            <GroupJob
                                height="1.8rem"
                                width="1.8rem"
                                onClick={handleGroupJob}
                            />
                        </>
                    ) : (
                        <GroupJob height="1.8rem" width="1.8rem" />
                    )}
                </div>
            </div>
            <div
                className="cursor-pointer "

                // value={title}
            >
                <PowerJob
                    height="1.5rem"
                    width="1.5rem"
                    onClick={handleBinJob}
                />
            </div>
        </>
    )
}
