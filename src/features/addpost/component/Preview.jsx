import React, { useState } from 'react'
import PreviewPart from './PreviewPart'
import PreviewFull from './PreviewFull'

export default function Preview({ add, p }) {
    return (
        <div>
            <div className="bg-success h-20 "></div>
            <div className="flex">
                <div className="h-28 w-28 bg-cyan-300 mt-[-50px] ml-4 rounded-full"></div>
                <div className="ml-4 mt-2">22/4/2023</div>
            </div>
            <div className="flex gap-8 mt-2">
                <div>โรงพยาบาลพญาไท</div>
                <div>กรุงเทพมหานคร</div>
            </div>
            <hr className="mt-2 border-black"></hr>
            {/* /////////////////////// */}
            {p === 'FullTime' ? (
                <PreviewFull detail={add} />
            ) : (
                <PreviewPart detail={add} />
            )}

            {/* /////////////////////// */}
        </div>
    )
}
