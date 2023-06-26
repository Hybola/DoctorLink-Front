import HistoryForm from '../features/history/HistoryForm'

//             id: 1,                                   jobPost.id
//             title: 'แผนก ฉุกเฉิน ต้องการด่วน',           post.title
//             jobType: 'PartTime',                     post.jobType
//             description: 'รายละเอียดงาน xxxxxx',      post.description

//             startDate: '20/06/2023',                 partTime.startDaten[day,month,year]
//             endDate: '20/12/2021',                   partTime.endDate.[day,month,year]
//             startTime: '10:00:00',                   partTime.startTime.[hour,minute,second]
//             endTime: '22:00:00',                     partTime.endTime.[hour,minute,second]
//             wage: 15000,                             partTime.wage

//             status: 'Active',
//             statusDetail: 'success',

//             intersested: 10,
//             create_at: '20/06/2023 10:00:00',        post.create_at.[day,month,year,hour,minute,second]

export default function History() {
    const arrObj = [
        {
            id: 1,
            title: 'แผนก ฉุกเฉิน ต้องการด่วน',
            jobType: 'PartTime',
            startDate: '20/06/2023',
            endDate: '20/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'success',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 10,
            create_at: '20/06/2023 10:00:00',
        },
        {
            id: 2,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '15/01/2023',
            endDate: '18/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 0,
            create_at: '15/06/2023 10:00:00',
        },
        {
            id: 3,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'cancel',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 0,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 4,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '18/12/2021',
            endDate: '19/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'cancel',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '20/12/2021 10:00:00',
        },
        {
            id: 5,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '15/12/2021',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'cancel',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 0,
            create_at: '30/05/2021 10:00:00',
        },
        {
            id: 6,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '18/01/2023',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '29/05/2021 10:00:00',
        },
        {
            id: 7,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '16/12/2021',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '28/05/2021 10:00:00',
        },
        {
            id: 8,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '14/12/2021 ',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '27/05/2021 10:00:00',
        },
        {
            id: 9,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'full-time',
            startDate: '16/01/2023',
            endDate: '14/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Active',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '27/05/2021 10:00:00',
        },
        {
            id: 10,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 11,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 12,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 13,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 14,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 15,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 16,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 17,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 18,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 19,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 20,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 21,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 22,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 23,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 24,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 25,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 26,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 27,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 28,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 29,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
        {
            id: 30,
            title: 'แผนก ฉุกเฉิน',
            jobType: 'PartTime',
            startDate: '17/12/2021',
            endDate: '17/12/2021',
            startTime: '10:00:00',
            endTime: '22:00:00',
            wage: 15000,
            status: 'Inactive',
            statusDetail: 'pending',
            description: 'รายละเอียดงาน xxxxxx',
            deleted: false,
            follower: 3,
            create_at: '10/06/2023 10:00:00',
        },
    ]
    return (
        <div className="  w-[100vw] h-[100vh] flex flex-col justify-start items-center">
            <HistoryForm arrHistory={arrObj} />
        </div>
    )
}
