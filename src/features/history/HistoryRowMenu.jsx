import { PreviewJob, EditJob, BinJob, GroupJob, PowerJob } from '../../icons'
export default function RowMenu({ follower }) {
    return (
        <>
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
            <div
                className="cursor-pointer "
                onClick={() => window.EditJob.showModal()}
            >
                <h1>
                    <EditJob
                        height="1.5rem"
                        width="1.5rem"
                        className="hover:scale-125 duration-200"
                    />
                </h1>
            </div>
            <div
                className="cursor-pointer "
                onClick={() => window.BinJob.showModal()}
            >
                <PowerJob
                    height="1.5rem"
                    width="1.5rem"
                    className="hover:scale-125 duration-200"
                />
            </div>
            <div
                className="cursor-pointer "
                onClick={() => window.GroupJob.showModal()}
            >
                {/* <GroupJob height="1.5rem" width="1.5rem" /> */}
                <div className="indicator hover:scale-125 duration-200 flex items-center justify-center">
                    <GroupJob height="1.5rem" width="1.5rem" />
                    {follower > 0 ? (
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
                    ) : null}
                </div>
            </div>
        </>
    )
}
