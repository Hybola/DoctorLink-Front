import ProviderHeader from './ProviderHeader'
import ProviderBody from './ProviderBody'

export default function ProviderProfile() {
    const jobpost = [{ Title: 'Test1' }, { Title: 'Test2' }, { Title: 'Test3' }]
    const profile = {
        userId: '1245',
        profileImagePath:
            'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
        coverImagePath:
            'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687201835/Screen_Shot_2566-06-20_at_02.10.09_ak5jzo.png',
        follower: '14',
        name: 'ศูนย์บริการสาธารณสุข 64 คลองสามวา',
        description: 'สถานพยาบาลขนาดเล็กในเครือ กทม.',
        location: {
            isBKK: true,
            address: 'เลขที่ 1 ซอย เลียบคลองสอง 10 แขวงบางชัน ',
            district: 'คลองสามวา',
            province: 'กรุงเทพมหานคร',
        },
        googleMap: 'https://goo.gl/maps/8Tzptv9WP2u3MrEY7',
        phone: '089-5673272',
        lineId: 'PBHC64',
    }
    const user = { userId: '1245' }

    const joblist = jobpost.map((job) => (
        <div className="w-full h-[600px] overflow-auto bg-info"></div>
    ))

    return (
        <div>
            <div className=" max-w-[800px]  min-w-[540px]  bg-base-100 rounded-lg  my-4 shadow-sm h-fit pb-[14px]">
                <ProviderHeader profile={profile} user={user} />
                <ProviderBody profile={profile} user={user} />
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
