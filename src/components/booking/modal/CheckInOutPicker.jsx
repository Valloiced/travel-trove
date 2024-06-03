import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';
import { useState } from 'react';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

const now = new Date();
const min = now;
const max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());

export default function CheckInOutPicker({ dates, setDates, setShowModal }) {
    const handleDateChange = (e) => {
        const newDates = e.value;
        const checkIn = new Intl.DateTimeFormat('sv-SE').format(new Date(newDates[0]));
        const checkOut = new Intl.DateTimeFormat('sv-SE').format(new Date(newDates[1]));

        setDates([checkIn, checkOut]);
    }

    return (
        <Datepicker
            select="range"
            display='anchored'
            returnFormat="iso8601"
            min={min}
            max={max}
            pages={2}
            value={dates}
            label="Pick your schedule"
            inputStyle="outline"
            labelStyle="stacked"
            placeholder="Please select..."
            onChange={handleDateChange}
            onOpen={() => setShowModal(false)}
        />
    );
}
