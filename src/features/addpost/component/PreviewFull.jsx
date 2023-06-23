import React from 'react'

export default function PreviewFull({ detail }) {
    return (
        <div className="mt-2">
            <div className="font-bold mt-2">Title : {detail.title}</div>
            <div className="font-bold mt-2">Location : {detail.location}</div>
            <div className="font-bold mt-2">
                Contract :
                <div className="font-thin">
                    Phone : {detail.phone}
                    <br></br>
                    Line : {detail.line}
                </div>
            </div>
            <div className="font-bold mt-2">Job Type : {detail.jobType}</div>
            <div className="font-bold mt-2">
                Job Description :{detail.jobDes}
            </div>
            <div className="font-bold mt-2">
                WorkingDay :{detail.workingDay}
            </div>
            <div className="font-bold mt-2">StartDate :{detail.startDate}</div>
            <div className="font-bold mt-2">Salary :{detail.salary}</div>
            <div className="font-bold mt-2">
                Annual holiday :{detail.annual}
            </div>
            <div className="font-bold mt-2">Benefit :{detail.benefit}</div>
            <div className="font-bold mt-2">other :{detail.other}</div>
        </div>
    )
}
