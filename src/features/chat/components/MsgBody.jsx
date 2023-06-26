
export default function MsgBody(props) {
    const {msg, chatuser , isMe} = props
    return (
      <li className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
        { !isMe && <p className="text-xs me-2">{chatuser} : </p> }
        <div className={`relative max-w-xl px-4 py-2 text-gray-700 ${isMe ? 'bg-gray-100': ''} rounded shadow`}>
          <span className="block">{msg}</span>
        </div>
      </li>
    );
  }