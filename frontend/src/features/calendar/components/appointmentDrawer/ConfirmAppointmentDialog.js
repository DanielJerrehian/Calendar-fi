import React, { forwardRef } from 'react';
import moment from 'moment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function ConfirmAppointmentDialog(props) {
    const { dialogOpen, handleDrawerAndDialog, newAppointment, handleSubmit } = props;
    const appointmentDate = moment(newAppointment?.startDateTime, 'MM-DD-YYYY, HH').format('MMMM Do, YYYY')
    const appointmentStartTime = moment(newAppointment?.startDateTime, 'MM-DD-YYYY, HH').format('h A')
    const appointmentEndTime = moment(newAppointment?.endDateTime, 'MM-DD-YYYY, HH').format('h A')


    return (
        <Dialog
            open={dialogOpen}
            TransitionComponent={Transition}
            keepMounted
        // onClose={() => handleDrawerAndDialog()}
        >
            <DialogTitle>Confirm Appointment</DialogTitle>
            <IconButton
                onClick={() => handleDrawerAndDialog()}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <DialogContentText>
                    You are about to schedule an appointment on {appointmentDate} from {appointmentStartTime} to {appointmentEndTime}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    type='submit'
                    variant='contained'
                    disableElevation
                    fullWidth
                    onClick={handleSubmit}
                >
                    Confirm & Schedule
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default ConfirmAppointmentDialog