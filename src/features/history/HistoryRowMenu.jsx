import { PreviewJob, EditJob, BinJob, GroupJob, PowerJob } from '../../icons'
import { useDispatch, useSelector } from 'react-redux'
import { getObjSelected, getTitleSelected, getJob } from './slice/history-slice'
import { useEffect } from 'react'

export default function RowMenu({ follower, title, objPost }) {
    // console.log(title)
    const dispatch = useDispatch()
    // console.log(objUser)
    // useEffect(() => {
    //     dispatch(getObjSelected(objUser)).unwrap()
    // }, [])
    const objPostSelected = useSelector((state) => state.history.objSelected)
    // console.log('objPost', objPost)

    const handleBinJob = async (e) => {
        // console.log(e.target.attributes.value.value)
        // dispatch(getTitleSelected(e.target.attributes.value.value)).unwrap()
        // dispatch(getObjSelected(objPost)).unwrap()
        await dispatch(getJob({ id: objPost?.id })).unwrap()
        window.BinJob.showModal()
    }
    const handleGroupJob = async (e) => {
        // console.log(e.target.attributes.value.value)
        // dispatch(getTitleSelected(e.target.attributes.value.value)).unwrap()
        await dispatch(getJob({ id: objPost?.id })).unwrap()
        // dispatch(getObjSelected(objPost)).unwrap()

        // console.log('777788889999', objPost)
        window.GroupJob.showModal()
    }

    const handleEditJob = async (e) => {
        // console.log(e.target.attributes.value.value)
        // dispatch(getTitleSelected(e.target.attributes.value.value)).unwrap()
        await dispatch(getJob({ id: objPost?.id })).unwrap()
        // dispatch(getObjSelected(objPost)).unwrap()

        // console.log('777788889999', objPost)
        window.EditJob.showModal()
    }

    return (
        <>
            {/* <HistoryModals /> */}

            <div
                className="cursor-pointer"
                onClick={() => window.PreviewJob.showModal()}
            >
                <PreviewJob
                    height="1.5rem"
                    width="1.5rem"
                    className="hover:scale-125 duration-200"
                />
            </div>
            <div className="cursor-pointer " onClick={handleEditJob}>
                <h1>
                    <EditJob
                        height="1.5rem"
                        width="1.5rem"
                        className="hover:scale-125 duration-200"
                    />
                </h1>
            </div>
            {follower > 0 ? (
                <div className="cursor-pointer " onClick={handleGroupJob}>
                    {/* <GroupJob height="1.5rem" width="1.5rem" /> */}

                    <div className="indicator hover:scale-125 duration-200 flex items-center justify-center">
                        <GroupJob height="1.5rem" width="1.5rem" />

                        <span
                            className="indicator-item indicator-middle badge badge-secondary bg-red-400 text-white "
                            style={{
                                height: '1rem',
                                width: '0.2rem',
                                fontSize: '0.7rem',
                            }}
                        >
                            {follower > 9 ? '+9' : follower}
                        </span>
                    </div>
                </div>
            ) : (
                <div className="cursor-pointer disabled">
                    {/* <GroupJob height="1.5rem" width="1.5rem" /> */}

                    <div className="indicator hover:scale-125 duration-200 flex items-center justify-center">
                        <GroupJob height="1.5rem" width="1.5rem" />
                    </div>
                </div>
            )}
            <div className="cursor-pointer " onClick={handleBinJob}>
                <PowerJob
                    height="1.5rem"
                    width="1.5rem"
                    className="hover:scale-125 duration-200"
                />
            </div>
        </>
    )
}
