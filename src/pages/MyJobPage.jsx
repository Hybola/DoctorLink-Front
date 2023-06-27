import MyJob from '../features/myjob/components/Myjob'

export default function MyJobPage() {
    const savedJob = [
        {
            id: 1,
            name: 'AAAA',
            profileImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
        },
        {
            id: 2,
            name: 'BBBB',
            profileImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
        },
        {
            id: 3,
            name: 'CCCC',
            profileImage:
                'https://res.cloudinary.com/dbhkkoqkt/image/upload/v1687202073/Screen_Shot_2566-06-20_at_02.13.58_tncfxz.png',
        },
    ]
    return (
        <div className="  w-full h-screen  bg-[#F5FBFC] flex justify-center">
            <MyJob savedJob={savedJob} />
        </div>
    )
}
