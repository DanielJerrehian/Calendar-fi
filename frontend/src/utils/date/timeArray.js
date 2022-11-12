import moment from 'moment';

const createTimeArray = (startTime, endTime) => {
    const timeArray = []
    for (let hour = startTime; hour <= endTime; hour++) {
        timeArray.push(moment(hour, ['HH']).format('h A'))
    }
    return timeArray
};

export default createTimeArray;