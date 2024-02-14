import React from 'react';
import { findDay, findMonth } from '../utils/dateUtils';

type UpperInfoProps = {
    city: string;
    date: Date;
    temp: string;
    'weather-condition': string;
    temp_hi: string;
    temp_low: string;

    highlighted: boolean;
};

function UpperInfo(props: UpperInfoProps) {
    // function findMonth(number: number) {
    //     const months = [
    //         'January',
    //         'February',
    //         'March',
    //         'April',
    //         'May',
    //         'June',
    //         'July',
    //         'August',
    //         'September',
    //         'October',
    //         'November',
    //         'December',
    //     ];

    //     return months[number];
    // }

    const day = findDay(props.date.getDate());
    const month = findMonth(props.date.getMonth());
    const date = props.date.getDate();

    return (
        <div>
            <div>{props.city}</div>
            <div>{`${day} , ${month} ${date}`}</div>
            <div>{props.temp}</div>
            <div>{props['weather-condition']}</div>
            <div>{props.temp_hi}</div>
            <div>{props.temp_low}</div>
        </div>
    );
}

export default UpperInfo;
