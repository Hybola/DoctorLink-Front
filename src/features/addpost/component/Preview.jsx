import React, { useState } from 'react'
import PreviewPart from './PreviewPart'
import PreviewFull from './PreviewFull'

export default function Preview({ add, p }) {
    return (
        <div className=" ">
            <div className="bg-slate-600 h-20 "></div>
            <div className="flex">
                <div className="h-24 w-24 bg-cyan-300 mt-[-50px] ml-4"></div>
                <div className="ml-4 mt-2">22/4/2023</div>
            </div>
            <div className="flex gap-8">
                <div className="font-bold">โรงพยาบาลพญาไท</div>
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
