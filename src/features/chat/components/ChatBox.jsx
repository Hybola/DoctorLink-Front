import MsgBody from './MsgBody'
import MsgSendBox from './MsgSendBox'

export default function ChatBox(props) {
    const { username, allMsg, socketId, room } = props
    return (
        <div className="container mx-auto">
            <div className="max-w-2xl border rounded">
                <div>
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                            <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://www.svgrepo.com/show/508199/user-square.svg"
                                alt="username"
                            />
                            <span className="block ml-2 font-bold text-gray-600">
                                {username}
                            </span>
                            <span
                                className={
                                    'absolute w-3 h-3 rounded-full left-10 top-3' +
                                    ` ${
                                        socketId ? 'bg-green-600' : 'bg-red-500'
                                    }`
                                }
                            ></span>
                        </div>
                        <div className="relative w-full p-6 overflow-y-auto h-[29rem]">
                            <ul className="space-y-2">
                                {allMsg.map((el, i) => (
                                    <MsgBody
                                        key={i}
                                        msg={el.msg}
                                        chatuser={el.username}
                                        isMe={el.username === username}
                                    />
                                ))}
                            </ul>
                        </div>
                        <MsgSendBox room={room} username={username} />
                    </div>
                </div>
            </div>
        </div>
    )
}
