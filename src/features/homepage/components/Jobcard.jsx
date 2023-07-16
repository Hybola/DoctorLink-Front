import { dateTimeTH } from '../../../utils/dateTime'
import { useDispatch, useSelector } from 'react-redux'
import { setJobRightPage } from '../slice/home-slice'
import * as postService from '../../../api/post-api'
export default function Jobcard({ jobpost }) {
    const role = useSelector((state) => state.auth?.role)
    const dispatch = useDispatch()

    return (
        <div
            className="h-[250px] w-[350px] rounded-lg border border-primary shadow-lg cursor-pointer"
            id={jobpost.id}
            onClick={async (e) => {
                if (role == 'doctor') {
                    const result = await postService.getPostById(e.target.id)
                    dispatch(setJobRightPage(result.data)).unwrap()
                } else {
                    const result = await postService.getPostByIdForGuest(
                        e.target.id
                    )
                    dispatch(setJobRightPage(result.data)).unwrap()
                }
            }}
        >
             
            <div className="relative">
                <div className="text-base p-2 flex items-baseline gap-5 mt-3 ml-2">
                    <div>
                        <img
                            src={jobpost?.Provider.profileImage}
                            className="rounded-md shadow-xl  w-[40px] h-[40px] "
                        />
                    </div>
                    <div className="font-thin text-xs">
                        {dateTimeTH(jobpost?.createdAt)}
                    </div>
                </div>
                <div className="text-lg p-2 ml-2  flex items-baseline font-bold mt-2">
                    <div>{jobpost?.title}</div>
                </div>
                <div className="text-base p-2 ml-2 font-normal flex items-baseline  mt-6 ">
                    <p>{jobpost?.location}</p>
                </div>
                <div
                    className=" text-base p-2 ml-2 flex items-baseline gap-12 -mt-1 "
                    name={jobpost.providerId}
                >
                    <p>{jobpost?.jobType}</p>
                    <div
                        id={jobpost.id}
                        className=" absolute top-0 bottom-0 left-0 right-0"
                    ></div>
                </div>
                <div className="text-xl font-bold p-2 ml-2 mt-8">
                    <p>{jobpost?.saraly}</p>
                </div>
            </div>
        </div>
    )
}
