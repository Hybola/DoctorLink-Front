import React, { useState } from 'react'
export default function HistoryStage(props) {
    const { stage } = props
    return (
        <div className="dropdown dropdown-end">
            <div className="m-1">
                {stage == 0 ? (
                    <span className="border border-red-300 text-center text-red-500 rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50">
                    ยกเลิก
                    </span>
                ) : stage == 1 ? (
                    <span className="border border-primary text-center text-neutral rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50">
                        รออนุมัติ
                    </span>
                ) : (
                    <span className="border border-green-400 text-center text-green-600 rounded-2xl px-4 py-1 hover:bg-info hover:bg-opacity-50">
                        อนุมัติ
                    </span>
                )}
            </div>
        </div>
    )
}
