import React from 'react'

export default function PreviewPart({ detail }) {
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
                StartDateTime :{detail.startDateTime}
            </div>
            <div className="font-bold mt-2">
                EndDateTime :{detail.endDateTime}
            </div>
            <div className="font-bold mt-2"> Wage :{detail.wage}</div>
            <div className="font-bold mt-2"> Other :{detail.other}</div>
        </div>
    )
}
