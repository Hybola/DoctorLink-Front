export default function Filter() {
    const style = {
        textTransform: 'none',
    }
    return (
        <div className="flex justify-center text-success gap-4">
            <details className="dropdown">
                <summary className="btn m-1 shadow-md" style={style}>
                    Date Posted
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                    <li>
                        <a>Last 3 days</a>
                    </li>
                    <li>
                        <a>Last 7 days</a>
                    </li>
                </ul>
            </details>
            <details className="dropdown">
                <summary className="btn m-1 shadow-md" style={style}>
                    Salary
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                    <li>
                        <a>40000-100000</a>
                    </li>
                    <li>
                        <a>100000-150000</a>
                    </li>
                    <li>
                        <a>150000-200000</a>
                    </li>
                </ul>
            </details>
            <details className="dropdown">
                <summary className="btn m-1 shadow-md" style={style}>
                    Job Type
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-fit">
                    <li>
                        <a>Part-time</a>
                    </li>
                    <li>
                        <a>Full-time</a>
                    </li>
                </ul>
            </details>
        </div>
    )
}
