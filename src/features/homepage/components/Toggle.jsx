import React from 'react'
import { useState } from 'react'

export default function Toggle({ handleJobType, isParttime }) {
    return (
        <div>
            {/* radio */}
            <div className="flex w-[250px] justify-between items-center min-w-[250px]">
                <div className="form-control " onClick={handleJobType}>
                    <label className="label cursor-pointer gap-2 ">
                        <span className="label-text">Part-Time</span>

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
                        <span className="label-text">Full-Time</span>
                    </label>
                </div>
            </div>
        </div>
    )
}
