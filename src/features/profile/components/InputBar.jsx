export default function InputBar({ label, type, name, value, onChange }) {
    return (
        <div className="flex items-center gap-2   h-[34px] rounded-ld my-2 font-normal text-sm">
            <label htmlFor={name} className="w-[180px] ">
                {label}
            </label>
            <input
                type={type || 'text'}
                name={name}
                className=" w-full border border-bg-primary rounded-lg h-[80%] p-2 "
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
