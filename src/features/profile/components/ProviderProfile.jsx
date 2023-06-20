import Header from './ProviderHeader'
import Body from './ProviderBody'

export default function ProviderProfile() {
    const profile = {
        userId: '1245',
        profileImagePath:
            'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
        coverImagePath:
            'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687201361/Screen_Shot_2566-06-20_at_02.00.32_wlys25.png',
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
        <div className=" max-w-[740px]  min-w-[540px] w-[80%] bg-base-100 rounded-lg  my-4 shadow-sm">
            <Header profile={profile} user={user} />
            <Body profile={profile} user={user} />
        </div>
    )
}
