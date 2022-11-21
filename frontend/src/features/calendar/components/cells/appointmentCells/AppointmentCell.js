import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { getWeekDaysMapper, getScheduledAppointments, getWeekNumber, getNow } from '../../../calendarSlice';
import AppointmentInPastCell from './appointmentInPastCell/AppointmentInPastCell';
import AppointmentBookedCell from './appointmentBookedCell/AppointmentBookedCell';
import AppointmentAvailableCell from './appointmentAvailableCell/AppointmentAvailableCell';


function AppointmentCell(props) {
    const { dayCell, timeRow } = props;
    const weekDaysMapper = useSelector(getWeekDaysMapper);
    const weekNumber = useSelector(getWeekNumber);
    const appointmentDateTime = moment(`${weekDaysMapper[weekNumber][dayCell]}, ${timeRow}`, 'MM-DD-YYYY, h A')
    const today = moment(useSelector(getNow));
    const appointmentInPast = appointmentDateTime.isBefore(today);
    const scheduledAppointments = useSelector(getScheduledAppointments);
    const [appointmentBooked, setAppointmentBooked] = useState(false);


    const checkIfAppointmentBooked = () => {
        !appointmentInPast && scheduledAppointments.map(appointment => appointment.appointmentTime).includes(appointmentDateTime.format('MM-DD-YYYY, HH'))
            ? setAppointmentBooked(true)
            : setAppointmentBooked(false)
    }

    useEffect(() => {
        checkIfAppointmentBooked();
    }, [appointmentInPast, scheduledAppointments, weekNumber]);

    return (
        appointmentInPast
            ? <AppointmentInPastCell />
            : appointmentBooked
                ? <AppointmentBookedCell />
                : <AppointmentAvailableCell appointmentDateTime={appointmentDateTime} />
    )
}

export default AppointmentCell