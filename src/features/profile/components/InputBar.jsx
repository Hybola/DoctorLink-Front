export default function InputBar({ label, type, name, placeholder }) {
    return (
        <div className="flex items-center gap-2   h-[34px] rounded-ld my-2 font-normal text-sm">
            <label htmlFor={name} className="w-[180px] ">
                {label}
            </label>
            <input
                type={type || 'text'}
                name={name}
                className=" w-full border border-bg-primary rounded-lg h-[80%] p-2 "
                placeholder={placeholder}
            />
        </div>
    )
}
