export default function NavBar({ myJob, setMyJob }) {
    const noneActiveMid = 'w-full  h-[50px]  flex items-center  border p-4 '
    const activeMid =
        'w-full  h-[50px]  flex items-center  border p-4 text-blue-700 font-bold border-l-4   border-l-blue-700'
    const noneActiveTail =
        'w-full  h-[50px]  flex items-center  border p-4 rounded-b-lg'
    const activeTail =
        'w-full  h-[50px]  flex items-center  border p-4 text-blue-700 font-bold border-l-4   border-l-blue-700 rounded-b-lg'
    return (
        <div className="min-w-[200px] w-[200px] h-[155px]  bg-base-100 border  rounded-lg ">
            <div className="w-full  h-[55px]  flex justify-center items-center  font-bold  rounded-t-lg">
                My jobs
            </div>
            <div
                className={myJob == 1 ? activeMid : noneActiveMid}
                onClick={() => setMyJob(1)}
            >
                Saved Jobs
            </div>
            <div
                className={myJob == 2 ? activeTail : noneActiveTail}
                onClick={() => setMyJob(2)}
            >
                Interested Jobs
            </div>
        </div>
    )
}
