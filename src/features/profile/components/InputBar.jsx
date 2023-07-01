export default function InputBar({ label, type, name, value, onChange }) {
    return (
        <div className="flex items-center gap-2 rounded-lg font-normal text-lg mb-4">
            <label htmlFor={name} className="w-[180px] font-semibold">
                {label}
            </label>
            <input
                type={type || 'text'}
                name={name}
                className=" w-full border border-primary rounded-lg h-[80%] p-2 pl-3"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
