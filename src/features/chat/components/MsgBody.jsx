export default function MsgBody(props) {
    const { conversation, role } = props
    // const currentTime = new Date()

    return (
        <>
            <li
                className={`flex ${
                    role == conversation?.from ? 'justify-end' : 'justify-start'
                }`}
            >
                <div>
                    <div
                        className={`relative max-w-xl px-4 py-2 shadow-md text-gray-700 ${
                            role == conversation.from
                                ? 'bg-[#3C99F9] text-white'
                                : 'bg-[#F5F1DA]'
                        } rounded shadow`}
                    >
                        <span className={`block`}>{conversation.message}</span>
                    </div>
                    {/* <span className={'block'}>{Date.now()}</span> */}
                </div>
            </li>
        </>
    )
}
