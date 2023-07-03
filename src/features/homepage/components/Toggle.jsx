import React from 'react'
import { useState } from 'react'

export default function Toggle({ handleJobType, isParttime }) {
    return (
        <div>
            {/* radio */}
            <div className="flex justify-between items-center w-fit text-success">
                <div className="form-control" onClick={handleJobType}>
                    <label className="label cursor-pointer gap-2 ">
                        <span>Part-Time</span>

                        <input
                            type="radio"
                            name="radio-4"
                            className="radio radio-primary "
                            checked={isParttime}
                        />
                        <input
                            type="radio"
                            name="radio-4"
                            className="radio radio-primary"
                            checked={!isParttime}
                        />
                        <span>Full-Time</span>
                    </label>
                </div>
            </div>
        </div>
    )
}
