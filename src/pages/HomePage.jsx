import PageLeft from '../features/homepage/components/PageLeft'
import PageRight from '../features/homepage/components/PageRight'
import SearchBar from '../features/homepage/components/SearchBar'
import SearchFullTime from '../features/homepage/components/SearchFullTime'
import SearchPartTime from '../features/homepage/components/SearchPartTime'
import { allJobPost } from '../features/homepage/slice/home-slice'
import { useState, useEffect } from 'react'
import Toggle from '../features/homepage/components/Toggle'

import { useDispatch } from 'react-redux'
import { LetsChatIcon } from '../icons'
import DoctorChat from '../features/chat/doctorChat'
import Filter from '../features/homepage/components/Filter'

export default function HomePage() {
    const dispatch = useDispatch()
    ////=========  code by Chee
    const [open, setOpen] = useState(false) //toggle Open Modal DoctorChat
    //// Mock data all providers for mapping
    const [providers, setProviders] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Andy' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'James' },
        { id: 5, name: 'Rachel' },
    ])
    //// state manage chosen chat provider from JobCard
    const [chatUser, setChatUser] = useState({})
    ////===================
    const [input, setInput] = useState({
        searchText: '',
        isParttime: true,
    })

    const handleJobType = (e) => {
        const isParttime = input.isParttime
        setInput({ ...input, isParttime: !isParttime })
    }

    useEffect(() => {
        const getAllJobPost = async () => {
            await dispatch(allJobPost()).unwrap()
        }
        getAllJobPost()
    }, [])

    ////=== code by Chee
    const handleOpenChat = (user) => {
        setOpen((prev) => !prev)
        setChatUser(user)
    }
    const handleCloseChat = () => {
        setOpen(false)
        setChatUser({ id: null, name: '' })
    }
    ////===================

    return (
        <div>
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

            <div className="flex flex-col w-full ">
                <div className="pb-10">
                    <SearchBar input={input} setInput={setInput} />
                </div>

                {/* <div className="flex justify-center items-center w-full"> */}
                {/* เงื่อนไข useState */}
                {/* {input.isParttime ? (
                        <SearchPartTime
                            handleJobType={handleJobType}
                            isParttime={input.isParttime}
                        />
                    ) : (
                        <SearchFullTime
                            handleJobType={handleJobType}
                            isParttime={input.isParttime}
                        />
                    )} */}
                {/* </div> */}
                <div>
                    <Filter />
                </div>
            </div>

            <div className="flex gap-2 pt-10">
                <PageLeft />
                <PageRight />
                {/* //// ==== code by Chee ===== to InterestedJobBody// */}

                <div className="flex items-end">
                    {providers.map((provider, i) => (
                        <button
                            key={i}
                            class="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-white"
                            onClick={() => {
                                handleOpenChat(provider)
                            }}
                        >
                            <LetsChatIcon />
                        </button>
                    ))}
                </div>
                {open && (
                    <DoctorChat
                        chatUser={chatUser}
                        handleCloseChat={handleCloseChat}
                    />
                )}
            </div>
        </div>
    )
}
