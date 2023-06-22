import DoctorHeader from './DoctorHeader'
import DoctorBody from './DoctorBody'
import FollowedBox from './FollowedBox'

export default function DoctorProfile() {
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

    return (
        <div className="w-full flex justify-center">
            <div className=" max-w-[900px]  min-w-[600px] w-[700px] bg-base-100 rounded-lg  my-4 shadow-sm h-fit pb-[20px]">
                <DoctorHeader profile={profile} user={user} />
                <DoctorBody profile={profile} user={user} />
            </div>
        </div>
    )
}
