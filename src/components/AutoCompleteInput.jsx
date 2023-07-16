import { useState } from 'react'
export default function AutoCompleteInput({ name, state, setState, items }) {
    const [input, setInput] = useState('')
    const filterBox =
        input.trim() == ''
            ? items
            : items.filter((item) =>
                  item.name.toLowerCase().includes(input.toLowerCase())
              )

    const selectBox = filterBox.map((obj) => {
        return (
            <li
                className="bg-white w-[260px] h-[40px] p-2 pl-3 hover:bg-base-300"
                id={obj.id}
                onClick={(e) => {
                    setState({ ...state, [name]: e.target.id })
                }}
            >
                {obj.name}
            </li>
        )
    })

    return (
        <div className="flex flex-col">
            {state[name] == '' ? (
                <>
                    <input
                        type="search"
                        className=" w-full border border-primary rounded-lg h-[40px] p-2 pl-3 relative"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                    {input != '' && filterBox.length > 0 ? (
                        <ul className="border border-1 absolute mt-10 w-[260px]  rounded-b-lg max-h-[100px] overflow-auto">
                            {selectBox}
                        </ul>
                    ) : null}
                </>
            ) : (
                <input
                    type="text"
                    className=" w-full border border-primary rounded-lg h-[40px] p-2 pl-3 relative"
                    value={items.find((item) => item.id == state[name])?.name}
                    onClick={() => setState({ ...state, [name]: '' })}
                />
            )}
        </div>
    )
}
