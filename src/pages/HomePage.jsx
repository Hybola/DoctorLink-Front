import StartChatButton from '../features/chat/components/StartChatButton'
import PageLeft from '../features/homepage/components/PageLeft'
import PageRight from '../features/homepage/components/PageRight'
import SearchBar from '../features/homepage/components/SearchBar'
import SearchFullTime from '../features/homepage/components/SearchFullTime'
import SearchPartTime from '../features/homepage/components/SearchPartTime'
import { allJobPost } from '../features/homepage/slice/home-slice'
import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

export default function HomePage() {
    const dispatch = useDispatch()

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

    return (
        <div className="flex flex-col w-full">
            <div>
                <SearchBar input={input} setInput={setInput} />
            </div>

            <div>
                {/* เงื่อนไข useState */}
                {input.isParttime ? (
                    <SearchPartTime
                        handleJobType={handleJobType}
                        isParttime={input.isParttime}
                    />
                ) : (
                    <SearchFullTime
                        handleJobType={handleJobType}
                        isParttime={input.isParttime}
                    />
                )}
            </div>

            <div className="flex gap-2">
                <PageLeft />
                <PageRight />
            </div>
            <StartChatButton />
        </div>
    )
}
