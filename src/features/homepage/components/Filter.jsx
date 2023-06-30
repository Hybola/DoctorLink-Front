
export default function Filter() {
    return (
        <div className="flex justify-center text-success gap-4">
            <div className="dropdown">
                <label
                    tabIndex={0}
                    className="btn m-1 shadow-md"
                    style={{ textTransform: 'none' }}
                >
                    Date Posted
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
                    <li>
                        <a>Last 3 days</a>
                    </li>
                    <li>
                        <a>Last 7 days</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <label
                    tabIndex={0}
                    className="btn m-1 shadow-md"
                    style={{ textTransform: 'none' }}
                >
                    Salary Estimate
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
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
            </div>
            <div className="dropdown">
                <label
                    tabIndex={0}
                    className="btn m-1 shadow-md"
                    style={{ textTransform: 'none' }}
                >
                    Employment Type
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
                    <li>
                        <a>Part-time</a>
                    </li>
                    <li>
                        <a>Full-time</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
