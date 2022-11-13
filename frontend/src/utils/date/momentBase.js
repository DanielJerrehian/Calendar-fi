import moment from "moment";

const momentBase = moment.updateLocale('en', {
    week: {
        dow: 1
    }
});

export default momentBase;