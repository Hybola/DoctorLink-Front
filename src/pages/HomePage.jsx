import { allJobPost } from '../features/homepage/slice/home-slice'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PageLeft from '../features/homepage/components/PageLeft'
import PageRight from '../features/homepage/components/PageRight'
import SearchBar from '../features/homepage/components/SearchBar'
import Filter from '../features/homepage/components/Filter'

export default function HomePage() {
    const isAuthenticate = useSelector((state) => state.auth?.isAuthenticated)
    const filterJobList = useSelector((state) => state.home?.filterJob)

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

    return (
        <div className="bg-[#F5FBFC]">
            {isAuthenticate ? null : (
                <div className="flex flex-col justify-center items-center p-10">
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
            <div className="flex flex-col pt-0 w-full">
                <div className="pb-10 w-fit self-center">
                    <SearchBar setPageAt={setPageAt} />
                </div>

                <div>
                    <Filter handdleEdit={handdleEdit} setPageAt={setPageAt} />
                </div>
            </div>
            <div className="flex gap-8 pt-10 justify-center ">
                <PageLeft
                    joblist={filterJobList}
                    pageAt={pageAt}
                    setPageAt={setPageAt}
                />
                <PageRight />
            </div>
        </div>
    )
}
