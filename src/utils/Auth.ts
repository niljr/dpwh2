import moment from 'moment';
import 'moment-timezone';

export function isTokenValid(date: string) {
    const dateObj = new Date(date);
    const timeZone = moment.tz.guess();
    const momentObj = moment(dateObj).tz(timeZone).format();

    return moment().isBefore(momentObj);
}
