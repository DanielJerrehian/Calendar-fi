import moment from 'moment';

const weekDaysMapper = () => {
    let weekDaysMapper = {}
    const weeksRemaining = moment().isoWeeksInYear() - moment().isoWeek()
    for (let week = 0; week <= weeksRemaining; week++) {
        const dateCurrentLoop = moment().add(week, 'w')
        weekDaysMapper[dateCurrentLoop.isoWeek()] = {
            Monday: formatMomentDateObject(dateCurrentLoop.clone().weekday(1)),
            Tuesday: formatMomentDateObject(dateCurrentLoop.clone().weekday(2)),
            Wednesday: formatMomentDateObject(dateCurrentLoop.clone().weekday(3)),
            Thursday: formatMomentDateObject(dateCurrentLoop.clone().weekday(4)),
            Friday: formatMomentDateObject(dateCurrentLoop.clone().weekday(5)),
            Saturday: formatMomentDateObject(dateCurrentLoop.clone().weekday(6))
        }
    }
    return weekDaysMapper
}

const formatMomentDateObject = (momentObject) => {
    return momentObject.format('MM-DD-YYYY')
}

export default weekDaysMapper