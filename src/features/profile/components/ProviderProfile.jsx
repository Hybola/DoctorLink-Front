import { useSelector } from 'react-redux'
import ProviderHeader from './ProviderHeader'
import ProviderBody from './ProviderBody'

export default function ProviderProfile() {
    // const user = useSelector((state) => state.auth.user)
    // console.log(user)
    const user = { id: '1234' }
    const profile = {
        coverImage: null,
        createdAt: '2023-06-22T14:22:05.000Z',
        email: 'naeramit.18@gmail.com',
        healthProviderName: 'Naeramit',
        id: 1,
        mobile: '0895674332',
        password:
            '$2a$10$lY2HA.3W2ID218uNeWXznOEDYwdfsvCEuAdxReDocjwZXMXk6GZU.',
        profileImage: null,
        updatedAt: '2023-06-22T14:22:05.000Z',
    }

    // const profile = {
    //     userId: '1245',
    //     profileImagePath:
    //         'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
    //     coverImagePath:
    //         'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687201835/Screen_Shot_2566-06-20_at_02.10.09_ak5jzo.png',
    //     follower: '14',
    //     name: 'ศูนย์บริการสาธารณสุข 64 คลองสามวา',
    //     description: 'สถานพยาบาลขนาดเล็กในเครือ กทม.',
    //     location: {
    //         isBKK: true,
    //         address: 'เลขที่ 1 ซอย เลียบคลองสอง 10 แขวงบางชัน ',
    //         district: 'คลองสามวา',
    //         province: 'กรุงเทพมหานคร',
    //     },
    //     googleMap: 'https://goo.gl/maps/8Tzptv9WP2u3MrEY7',
    //     phone: '089-5673272',
    //     lineId: 'PBHC64',
    // }

    return (
        <div className="  max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-lg  my-4 shadow-sm h-fit p-[20px]">
            <ProviderHeader profile={profile} user={user} />
            <ProviderBody profile={profile} user={user} />
        </div>
    )
}
