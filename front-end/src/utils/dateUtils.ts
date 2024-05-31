export function findDay(number: number) {
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return weekdays[number];
}

export function findMonth(number: number) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return months[number];
}

// export function getTimeNow(time: Date) {
//     return new Intl.DateTimeFormat(navigator.language, {
//         timeStyle: 'short',
//     })
//         .format(time)
//         .replace(/:\d{2}/, ''); // format returns a string => "04:45 AM" after regex it returns "4 AM"
// }

export function getTimeNow(time: Date) {
    if (
        time.getHours() === new Date().getHours() &&
        time.getDate() === new Date().getDate()
    ) {
        return 'Now';
    }
    return new Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'short',
    })
        .format(time)
        .replace(/:\d{2}/, ''); // format returns a string => "04:45 AM" after regex it returns "4 AM"
}

export function parseISOLocal(time: string) {
    const b = time.split(/\D/).map((item) => Number(item)); // => it's like \d but the opposite => ["2024", "03", "14", "00", "00"]

    return new Date(b[0], b[1] - 1, b[2], b[3] ?? 0, b[4] ?? 0); //
}

//console.log(getTimeNow(new Date()));
