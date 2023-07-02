export default function HistoryModalGroup() {
    const arrayMembers = [
        {
            id: 1,
            name: 'Hart Hagerty',
            location: 'Bangkok',
            contact: '084-7723676',
            line: '@aalinesupport',
            socketId: 'uusjiioeokoogijfmiewii',
            Rooms: 'room1',
            selected: true,
            update_at: '12/06/2023 12:00:00',
            photoUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 2,
            name: 'Jone yipwam',
            location: 'Chainat',
            contact: '099-65689909',
            line: '@bblinesupport',
            socketId: '00ookwliirij[ovkovipi',
            Rooms: 'room2',
            selected: true,
            update_at: '18/06/2023 12:00:00',
            photoUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 3,
            name: 'Tyuii Rtfyya',
            location: 'Bangkok',
            contact: '084-7723676',
            line: '@cclinesupport',
            socketId: 'pldldlssooreomofdsml;',
            Rooms: 'room3',
            selected: false,
            update_at: '20/06/2023 12:00:00',
            photoUrl: 'https://picsum.photos/200/200',
        },
        {
            id: 4,
            name: 'Hovel Jansmit',
            location: 'Pathumthani',
            contact: '086-6654576',
            line: '@cclinesupport',
            socketId: 'pldldlssooreomofdsml;',
            Rooms: 'room3',
            selected: false,
            update_at: '12/05/2023 12:00:00',
            photoUrl: 'https://picsum.photos/200/200',
        },
    ]

    let newDate = new Date()
    let day =
        newDate.getDate() < 10
            ? `0${newDate.getDate()}`
            : `${newDate.getDate()}`
    let month =
        newDate.getMonth() + 1 < 10
            ? `0${newDate.getMonth() + 1}`
            : `${newDate.getMonth() + 1}`
    let year = newDate.getFullYear()
    const today = `${day}/${month}/${year}`

    const diffDay = (start, end) => {
        const oneDay = 24 * 60 * 60 * 1000
        const arrCreate = start.split('/')
        const arrToday = end.split('/')

        const firstDate = new Date(arrCreate[2], arrCreate[1], arrCreate[0])
        const secondDate = new Date(arrToday[2], arrToday[1], arrToday[0])
        const diffDays = Math.round((secondDate - firstDate) / oneDay)

        return diffDays
    }
    return (
        <>
            <dialog id="GroupJob" className="modal">
                <form
                    method="dialog"
                    className="modal-box max-w-5xl h-[800px] p-12 text-base text-success"
                >
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-4">
                        ✕
                    </button>
                    <div className="flex flex-col ">
                        <div className="w-fit text-xl self-center font-bold mb-4">
                            Group Job
                        </div>
                        {/* <div className="overflow-x-auto"> */}
                        <div className="overflow-x-auto">
                            <table className="table text-base">
                                {/* head */}
                                <thead>
                                    <tr className="font-light">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Last</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {arrayMembers.map((member) => (
                                        <>
                                            <tr>
                                                <td>
                                                    <div className="avatar flex justify-center items-center">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img
                                                                src={
                                                                    member.photoUrl
                                                                }
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div>
                                                            <div className="font-bold">
                                                                {member.name}
                                                            </div>
                                                            <div className="text-sm opacity-50 text-green-500">
                                                                {member.selected
                                                                    ? 'selected'
                                                                    : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {member.contact}
                                                    <br />
                                                    <span className="badge badge-success badge-md mt-1">
                                                        line: {member.line}
                                                    </span>
                                                </td>
                                                <td>
                                                    {diffDay(
                                                        member.update_at.split(
                                                            ' '
                                                        )[0],
                                                        today
                                                    ) < 30
                                                        ? diffDay(
                                                              member.update_at.split(
                                                                  ' '
                                                              )[0],
                                                              today
                                                          ) + ' d'
                                                        : member.update_at.split(
                                                              ' '
                                                          )[0]}
                                                </td>
                                                <th>
                                                    <button className="btn btn-primary hover:btn-success btn-xs text-white">
                                                        Chat
                                                    </button>

                                                    {member.selected ? (
                                                        <button className="btn btn-xs ml-3 text-gray-400">
                                                            un-select
                                                        </button>
                                                    ) : (
                                                        <button className="btn btn-xs ml-3  ">
                                                            Select
                                                        </button>
                                                    )}
                                                </th>
                                            </tr>
                                        </>
                                    ))}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Last</th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    )
}
