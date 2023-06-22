import ProviderHeader from './ProviderHeader'
import ProviderBody from './ProviderBody'

export default function ProviderProfile() {
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

    return (
        <div className="  max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-lg  my-4 shadow-sm h-fit p-[20px]">
            <ProviderHeader profile={profile} user={user} />
            <ProviderBody profile={profile} user={user} />
        </div>
    )
}
