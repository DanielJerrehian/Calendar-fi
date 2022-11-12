import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment'

import weekDaysMapper from '../../utils/date/weekDaysMapper';
import createTimeArray from '../../utils/date/timeArray';

const initialState = {
    today: moment().format('MM-DD-YYYY, HH'),
    weekNumber: moment().isoWeek(),
    timeArray: createTimeArray(9, 18),
    daysOfWeek: ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    weekDaysMapper: weekDaysMapper(),
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
        }
    },
})

export const { updateWeekNumber } = calendarSlice.actions;

export const getToday = (state) => state.calendar.today;
export const getWeekNumber = (state) => state.calendar.weekNumber;
export const getTimeArray = (state) => state.calendar.timeArray;
export const getDaysOfWeek = (state) => state.calendar.daysOfWeek;
export const getWeekDaysMapper = (state) => state.calendar.weekDaysMapper;
export const getBorderWidth = (state) => state.calendar.borderWidth;
export const getBorderColor = (state) => state.calendar.borderColor;

export default calendarSlice.reducer;