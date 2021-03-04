export const formatDate = (date) => {

    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}


export const formatPastDate = (date, years) => {

    var newDateObj = date.setFullYear(date.getFullYear() - years);

    var newFormattedDate = formatDate(newDateObj);

    return newFormattedDate;
}