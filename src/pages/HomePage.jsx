import StartChatButton from '../features/chat/components/StartChatButton'
import PageLeft from '../features/homepage/components/PageLeft'
import PageRight from '../features/homepage/components/PageRight'
import SearchBar from '../features/homepage/components/SearchBar'
import SearchFullTime from '../features/homepage/components/SearchFullTime'
import SearchPartTime from '../features/homepage/components/SearchPartTime'
import { allJobPost } from '../features/homepage/slice/home-slice'
import { useState, useEffect } from 'react'
import Toggle from '../features/homepage/components/Toggle'

import { useDispatch } from 'react-redux'
import { FilterIcon } from '../icons'
import Filter from '../features/homepage/components/Filter'

export default function HomePage() {
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        searchText: '',
        // jobType: 'FULLTIME',
    })

    // const selectedJob = useState({title: 'accounting'})

    // const [renderCards, setRenderCards] = useState('Input from redux')

    // const [filter, setFilter] = useState({
    //     date: null,
    //     salary: [20000,40000],
    // })

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

    // const handleSalary = (e) => {
    //     //[20000,40000]
    //     const newRenderCard = renderCards.filter((card)=>{
    //         const filterdCard = [...renderCards]
    //         if(filter.salary){
    //             card.salary >= e[0] && card.salary <= e[1]
    //         }
    //         if(filter.date){

    //         }
    //         if
    //         setRenderCards(filterdCard))
    //     }
    // }

    // const filteredJob = () => {
    //     return allJob.filter()
    // }

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
{/* <select name="" id="" onChange={event => {setInput({jobType: event.target.value})}}>
    <option value="ALL">All</option>
    <option value="FULLTIME">Full Time</option>
    <option value="PARTTIME">Part Time</option>
</select>
{input.jobType === 'FULLTIME' ? <h1>Full </h1> : ''}

{input.jobType === 'PARTTIME' ? <h1>Part</h1> : ''} */}

            <div className="flex gap-2 pt-10">
                <PageLeft />
                <PageRight /> 
            </div>
            <div className="flex justify-end">
                <StartChatButton />
            </div>
        </div>
    )
}
