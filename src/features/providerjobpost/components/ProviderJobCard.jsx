import { dateTimeTH } from '../../../utils/dateTime'
export default function ProviderJobCard({ post }) {
    //   {
    //     "id": 3,
    //     "title": "ต้องการหมอ 3 คน",
    //     "location": "สมุทรปราการ  บางพลี",
    //     "map": "https://goo.gl/maps/mjW9k2hbVEWSvQj28",
    //     "line": "@naeramitHospital",
    //     "jobType": "PartTime",
    //     "phone": "0817518953",
    //     "status": "active",
    //     "stage": 1,
    //     "createdAt": "2023-06-29T10:41:22.000Z",
    //     "providerId": 1,
    //     "providerName": "Naeramit Clinic",
    //     "providerProfileImage": "https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687720119/kkyme39awgwcc51rthli.png",
    //     "providerCoverImage": "https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687810604/sddfeye88csyjocvfabl.png",
    //     "Province": "Phatumthani",
    //     "jobStatus": 2
    // }
    return (
        <div className="w-full flex flex-col rounded-lg">
            <div className="w-full h-[20px] rounded-t-lg "></div>
            <div className="flex w-full  justify-end">
                <div>
                    <span>Post date: </span>
                    {dateTimeTH(post.createdAt).split(' ')[0]}
                </div>
            </div>
            <div>
                <span>Job Title: </span>
                {post.title}
            </div>
            <div className="flex ">
                <span>Location: </span>
                {post.location}
            </div>
            <div className="flex ">
                <a href={post.map}>Map</a>
            </div>
        </div>
    )
}
