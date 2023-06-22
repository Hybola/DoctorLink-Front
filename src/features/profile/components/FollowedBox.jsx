export default function FollowedBox() {
    const followed = [
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

    const followedCard = followed.map((obj) => (
        <div className="w-[100px] h-[150px] flex flex-col">
            <div>
                <img
                    src={obj.profileImage}
                    alt="profileImage"
                    className="w-[100px] h-[100px]"
                />
            </div>
            <div>{obj.name}</div>
        </div>
    ))

    return (
        <div className="w-[400px] h-[500px] flex flex-wrap">{followedCard}</div>
    )
}
