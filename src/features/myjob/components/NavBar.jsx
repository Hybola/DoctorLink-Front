export default function NavBar({ mode, setMode }) {
    return (
        <div className="min-w-[200px] w-[200px] h-[155px]  bg-base-100 border  rounded-lg">
            <div className="w-full  h-[55px]  flex justify-center items-center  font-bold  rounded-t-lg">
                My jobs
            </div>
            <div className="w-full  h-[50px]  flex items-center  border p-4 ">
                Saved Jobs
            </div>
            <div className="w-full  h-[50px]  flex  items-center  p-4  ">
                Interested Jobs
            </div>
        </div>
    )
}
