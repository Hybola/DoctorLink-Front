export const dateReverse = (date) => {
    if (!date) {
        return null
    }
    const arr = date.split('-')
    return `${arr[2]}/${arr[1]}/${+arr[0] + 543}`
}

const localTime = 'th-TH'

export const dateTimeTH = (strUTC) => {
    const dateTime = new Date(strUTC)
    return dateTime.toLocaleString(localTime)
}

export const compareDateAsc = (a, b) => {
    const createArrDateTime = (datetime) => [
        ...datetime.split('T')[0].split('-'),
        ...datetime.split('T')[1].split('.')[0].split(':'),
    ]

    const createArrDate = (date) => [...date.split('-')]

    const arrDateTimeA =
        a.split('T').length == 1 ? createArrDate(a) : createArrDateTime(a)
    const arrDateTimeB =
        b.split('T').length == 1 ? createArrDate(b) : createArrDateTime(b)

    for (let i = 0; i < arrDateTimeA.length; i++) {
        if (arrDateTimeA[i] > arrDateTimeB[i]) {
            return 1
        }
    }

    return -1
}
