import Header from '../features/homepage/components/Header'
import PageLeft from '../features/homepage/components/PageLeft'
import SearchBar from '../features/homepage/components/SearchBar'
import SearchFullTime from '../features/homepage/components/SearchFullTime'
import SearchPartTime from '../features/homepage/components/SearchPartTime'
import { useState } from 'react'

export default function HomePage() {
    const [input, setInput] = useState({
        searchText: '',
        location: '',
        isParttime: true,
    })

    return (
        <div className="flex flex-col w-full">
            <SearchBar input={input} setInput={setInput} />
            {/* เงื่อไข useState */}
            {input.isParttime ? <SearchPartTime /> : <SearchFullTime />}

            <PageLeft />
        </div>
    )
}
