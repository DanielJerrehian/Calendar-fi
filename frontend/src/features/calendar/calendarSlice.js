import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

import weekDaysMapper from '../../utils/date/weekDaysMapper';
import createTimeArray from '../../utils/date/timeArray';


const initialState = {
    now: moment().format(),
    weekNumber: moment().isoWeek(),
    timeArray: createTimeArray(9, 18),
    daysOfWeek: ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weekDaysMapper: weekDaysMapper(),
    selectedAppointmentDateTime: null,
    appointmentFormValidationError: { title: false, startDateTime: false, endDateTime: false, email: false, confirmEmail: false, notes: false },
    emailMatchValidationError: false,
    drawerOpen: false,
    borderWidth: '1px',
    borderColor: '#C0C0C0'
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
        setSelectedAppointmentDateTime: (state, action) => {
            state.selectedAppointmentDateTime = action.payload;
        },
        setAppointmentFormValidationError: (state, action) => {
            state.appointmentFormValidationError = {
                ...state.appointmentFormValidationError,
                ...action.payload
            }
        },
        setEmailMatchValidationError: (state, action) => {
            state.emailMatchValidationError = action.payload
        },
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        }
    },
})

export const { updateWeekNumber, setSelectedAppointmentDateTime, setAppointmentFormValidationError, setEmailMatchValidationError, setDrawerOpen } = calendarSlice.actions;

export const getNow = (state) => state.calendar.now;
export const getWeekNumber = (state) => state.calendar.weekNumber;
export const getTimeArray = (state) => state.calendar.timeArray;
export const getDaysOfWeek = (state) => state.calendar.daysOfWeek;
export const getWeekDaysMapper = (state) => state.calendar.weekDaysMapper;
export const getSelectedAppointmentDateTime = (state) => state.calendar.selectedAppointmentDateTime;
export const getAppointmentFormValidationError = (state) => state.calendar.appointmentFormValidationError;
export const getEmailMatchValidationError = (state) => state.calendar.emailMatchValidationError;
export const getDrawerOpen = (state) => state.calendar.drawerOpen;
export const getBorderWidth = (state) => state.calendar.borderWidth;
export const getBorderColor = (state) => state.calendar.borderColor;

export default calendarSlice.reducer;