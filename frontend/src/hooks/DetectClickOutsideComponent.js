import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDrawerOpen, setSelectedAppointmentDateTime } from '../features/calendar/calendarSlice';

function useDetectClickOutsideComponent(ref, dispatch) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(setDrawerOpen(false));
                dispatch(setSelectedAppointmentDateTime(null));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside) };
    }, [ref, dispatch]);
}

export default function DetectClickOutsideComponent(props) {
    const dispatch = useDispatch()
    const wrapperRef = useRef(null);
    useDetectClickOutsideComponent(wrapperRef, dispatch);

    return <div ref={wrapperRef}>{props.children}</div>;
}