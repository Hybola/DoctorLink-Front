import { useState } from 'react'
import { EmojiIcon } from '../../../icons/index'

export default function MsgSendBox(props) {
    const { fn } = props
    const [input, setInput] = useState('')
    const hdlSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return setInput('')
        socket.emit('sendMessage', { username, msg: input, room })
        setInput('')
    }

    return (
        <>
            <form
                onSubmit={(e) => fn(e, input)}
                className="flex items-center justify-between w-full p-3 border-t border-gray-300"
            >
                <EmojiIcon />
                <input
                    type="text"
                    placeholder="Message"
                    className="flex-1 py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                    <svg
                        className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </form>

           
        </>
    )
}
