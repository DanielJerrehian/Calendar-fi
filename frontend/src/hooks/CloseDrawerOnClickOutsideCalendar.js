import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDrawerOpen, setDrawerOpen, setSelectedAppointmentDateTime } from '../features/calendar/calendarSlice';

function useDetectClickOutsideCalendar(ref, drawerOpen, dispatch) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (drawerOpen) {
                    dispatch(setDrawerOpen(false));
                    dispatch(setSelectedAppointmentDateTime(null));
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside) };
    }, [ref, drawerOpen, dispatch]);
}

export default function CloseDrawerOnClickOutsideCalendar(props) {
    const dispatch = useDispatch();
    const wrapperRef = useRef(null);
    const drawerOpen = useSelector(getDrawerOpen);
    useDetectClickOutsideCalendar(wrapperRef, drawerOpen, dispatch);

    return <div ref={wrapperRef}>{props.children}</div>;
}