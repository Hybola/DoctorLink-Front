import React, { useState } from 'react'
export default function HistoryStage(props) {
    // console.log(stage == 1)
    // const [stageValue, setStageValue] = useState(stage)
    const { stage } = props
    return (
        <div className="dropdown dropdown-end">
            <div className="m-1">
                {stage == 0 ? (
                    <span className="badge badge-outline badge-error w-[120px] ">
                        ยกเลิก
                    </span>
                ) : stage == 1 ? (
                    <span className="badge badge-outline badge-warning w-[120px]">
                        รออนุมัติ
                    </span>
                ) : (
                    <span className="badge badge-outline badge-success w-[120px]">
                        อนุมัติ
                    </span>
                )}
            </div>
        </div>
    )
}
// react how to change color div from id
