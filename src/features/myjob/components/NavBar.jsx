export default function NavBar({ myJob, setMyJob }) {
    const noneActive = 'w-full  h-[50px]  flex items-center  border p-4 '
    const active =
        'w-full  h-[50px]  flex items-center  border p-4 text-blue-700 font-bold border-l-4   border-l-blue-700'
    return (
        <div className="min-w-[200px] w-[200px] h-[205px]  bg-base-100 border  rounded-lg ">
            <div className="w-full  h-[55px]  flex justify-center items-center  font-bold  rounded-t-lg">
                My jobs
            </div>
            <div
                className={myJob == 1 ? active : noneActive}
                onClick={() => setMyJob(1)}
            >
                Saved Jobs
            </div>
            <div
                className={myJob == 2 ? active : noneActive}
                onClick={() => setMyJob(2)}
            >
                Interested Jobs
            </div>
            <div
                className={myJob == 3 ? active : noneActive}
                onClick={() => setMyJob(3)}
            >
                Attended Jobs
            </div>
        </div>
    )
}
