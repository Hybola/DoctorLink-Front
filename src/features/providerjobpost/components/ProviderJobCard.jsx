import { dateTimeTH } from '../../../utils/dateTime'
export default function ProviderJobCard({ post }) {

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
