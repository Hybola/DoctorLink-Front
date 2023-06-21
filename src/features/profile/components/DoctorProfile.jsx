import DoctorHeader from './DoctorHeader'
import DoctorBody from './DoctorBody'

export default function DoctorProfile() {
    const jobpost = [{ Title: 'Test1' }, { Title: 'Test2' }, { Title: 'Test3' }]
    const profile = {
        userId: '1245',
        profileImagePath: '',
        coverImagePath: '',
        name: 'Sawadee Meesuk',
        gender: 1,
        description: '#MD #GP',
        phone: '089-56737872',
        lineId: 'PBHC64',
    }
    const user = { userId: '1245' }

    const joblist = jobpost.map((job) => (
        <div className="w-full h-[600px] overflow-auto bg-info"></div>
    ))

    return (
        <div>
            <div className=" max-w-[800px]  min-w-[540px]  bg-base-100 rounded-lg  my-4 shadow-sm h-fit pb-[14px]">
                <DoctorHeader profile={profile} user={user} />
                <DoctorBody profile={profile} user={user} />
            </div>
            <div className=" max-w-[800px]  min-w-[540px] bg-base rounded-lg  my-4 shadow-sm gap-4 flex flex-col">
                <div className="w-full h-[40px] bg-base-100  flex justify-center items-center">
                    <div>Job Post</div>
                </div>
                {joblist}
            </div>
        </div>
    )
}
