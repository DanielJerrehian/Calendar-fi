import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

import weekDaysMapper from '../../utils/date/weekDaysMapper';
import createTimeArray from '../../utils/date/timeArray';


const initialState = {
    now: moment().format('MM-DD-YYYY, HH'),
    weekNumber: moment().isoWeek(),
    timeArray: createTimeArray(9, 18),
    daysOfWeek: ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weekDaysMapper: weekDaysMapper(),
    selectedAppointmentDateTime: null,
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
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        }
    },
})

export const { updateWeekNumber, setSelectedAppointmentDateTime, setDrawerOpen } = calendarSlice.actions;

export const getNow = (state) => state.calendar.now;
export const getWeekNumber = (state) => state.calendar.weekNumber;
export const getTimeArray = (state) => state.calendar.timeArray;
export const getDaysOfWeek = (state) => state.calendar.daysOfWeek;
export const getWeekDaysMapper = (state) => state.calendar.weekDaysMapper;
export const getSelectedAppointmentDateTime = (state) => state.calendar.selectedAppointmentDateTime;
export const getDrawerOpen = (state) => state.calendar.drawerOpen;
export const getBorderWidth = (state) => state.calendar.borderWidth;
export const getBorderColor = (state) => state.calendar.borderColor;

export default calendarSlice.reducer;