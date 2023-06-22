import createClasses from '../../../utils/create-classes'

export default function LoginInput({
    placeholder,
    value,
    onChange,
    name,
    type,
    isInvalid,
}) {
    const className = createClasses(
        'block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1',
        isInvalid
            ? 'border-red-500 focus:ring-red-300'
            : 'border-primary focus:border-blue-500 focus:ring-blue-300'
    )
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    )
}
