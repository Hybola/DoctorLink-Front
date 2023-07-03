export default function InputBar({ label, type, name, value, onChange }) {
    return (
        <div className="flex flex-col gap-1 rounded-lg font-normal text-lg mb-3">
            <label htmlFor={name} className="w-fit font-semibold ">
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
