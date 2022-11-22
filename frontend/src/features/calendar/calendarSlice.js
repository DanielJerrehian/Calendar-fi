import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

import weekDaysMapper from '../../utils/date/weekDaysMapper';


const initialState = {
    now: moment().format(),
    weekNumber: moment().isoWeek(),
    weekDaysMapper: weekDaysMapper(),
    scheduledAppointments: [{ id: 1, title: 'Haircut', email: 'user@test.com', appointmentTime: moment('11-17-2022, 13', 'MM-DD-YYYY, HH').format('MM-DD-YYYY, HH') }, { id: 2, title: 'Haircut', email: 'user@test.com', appointmentTime: moment('11-18-2022, 14', 'MM-DD-YYYY, HH').format('MM-DD-YYYY, HH') }],
    selectedAppointmentDateTime: null,
    appointmentFormValidationError: { title: false, startDateTime: false, endDateTime: false, email: false, confirmEmail: false, notes: false },
    emailValidationError: { valid: true, message: '' },
    drawerOpen: false,
    alert: { display: false, severity: 'success', message: '' }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        updateWeekNumber: (state, action) => {
            state.weekNumber = state.weekNumber + action.payload
            if (state.weekNumber < moment().isoWeek()) {
                state.weekNumber = moment().isoWeek();
            }
        },
        scheduleNewAppointment: (state, action) => {
            const newAppointment = { id: state?.scheduledAppointments?.length + 1, title: action.payload?.title, email: action.payload?.email, appointmentTime: action.payload?.startDateTime }
            state.scheduledAppointments.push(newAppointment)
        },
        setSelectedAppointmentDateTime: (state, action) => {
            state.selectedAppointmentDateTime = action.payload;
        },
        setAppointmentFormValidationError: (state, action) => {
            state.appointmentFormValidationError = {
                ...state.appointmentFormValidationError,
                ...action.payload
            }
        },
        setEmailValidationError: (state, action) => {
            state.emailValidationError = {
                ...state.emailValidationError,
                ...action.payload
            }
        },
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        },
        setAlert: (state, action) => {
            state.alert = {
                ...state.alert,
                ...action.payload
            }
        }
    },
})

export const { updateWeekNumber, scheduleNewAppointment, setSelectedAppointmentDateTime, setAppointmentFormValidationError, setEmailValidationError, setDrawerOpen, setAlert } = calendarSlice.actions;

export const calendarReducer = (state) => state.calendar
export const getNow = (state) => state.calendar.now;
export const getWeekNumber = (state) => state.calendar.weekNumber;
export const getTimeArray = (state) => state.calendar.timeArray;
export const getDaysOfWeek = (state) => state.calendar.daysOfWeek;
export const getWeekDaysMapper = (state) => state.calendar.weekDaysMapper;
export const getScheduledAppointments = (state) => state.calendar.scheduledAppointments;
export const getSelectedAppointmentDateTime = (state) => state.calendar.selectedAppointmentDateTime;
export const getAppointmentFormValidationError = (state) => state.calendar.appointmentFormValidationError;
export const getEmailValidationError = (state) => state.calendar.emailValidationError;
export const getDrawerOpen = (state) => state.calendar.drawerOpen;
export const getAlert = (state) => state.calendar.alert

export default calendarSlice.reducer;