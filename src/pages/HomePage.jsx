import {
    allJobPost,
    getProviderPost,
} from '../features/homepage/slice/home-slice'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageLeft from '../features/homepage/components/PageLeft'
import PageRight from '../features/homepage/components/PageRight'
import SearchBar from '../features/homepage/components/SearchBar'
import Filter from '../features/homepage/components/Filter'

export default function HomePage() {
    const isAuthenticate = useSelector((state) => state.auth?.isAuthenticated)
    const myRole = useSelector((state) => state.auth?.role)
    const filterJobList = useSelector((state) => state.home?.filterJob)
    const [jobPost, setJobPost] = useState({
        postId: 1,
        providerId: 1,
        role: myRole,
    })

    const [pageAt, setPageAt] = useState(1)

    const dispatch = useDispatch()

    const handdleEdit = () => {
        setPageAt(1)
    }

    useEffect(() => {
        const getAllJobPost = async () => {
            await dispatch(allJobPost()).unwrap()
        }
        getAllJobPost()
    }, [])

    useEffect(() => {
        const providerPost = async (input) => {
            await dispatch(getProviderPost(input)).unwrap()
        }
        providerPost(jobPost)
    }, [jobPost])

    return (
        <div className="bg-[#F5FBFC]">
            {isAuthenticate ? null : (
                <div className="flex flex-col justify-center items-center p-20">
                    <h1 className="font-semibold text-4xl text-success">
                        Find The
                        <span className="text-primary"> Right Job</span>
                        <span className="text-success"> You Deserve</span>
                    </h1>
                    <p className="pt-5 text-success">
                        Find Jobs, Employment & Career Opportunities
                    </p>
                </div>
            )}
            <div className="flex flex-col pt-8 w-full">
                <div className="pb-10 w-fit self-center">
                    <SearchBar />
                </div>

                <div>
                    <Filter handdleEdit={handdleEdit} />
                </div>
            </div>
            <div className="flex gap-8 pt-10 justify-center ">
                <PageLeft
                    joblist={filterJobList}
                    pageAt={pageAt}
                    setPageAt={setPageAt}
                    setJobPost={setJobPost}
                />
                <PageRight />
            </div>
        </div>
    )
}
