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

export function time(number: number) {
    if (number <= 12) {
        return number + 'AM';
    } else {
        return number - 12 + 'PM';
    }
}
