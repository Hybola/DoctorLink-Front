export default function SelectedBar({ label, type, name }) {
    return (
        <div className="flex items-center gap-2   h-[34px] rounded-md my-2 font-normal text-sm">
            <label htmlFor={name} className="w-[180px] ">
                {label}
            </label>
            <input
                type={type || 'text'}
                name={name}
                className=" w-full bg-base-100 rounded-md h-[80%] p-2 "
                placeholder={placeholder}
            />
        </div>
    )
}
