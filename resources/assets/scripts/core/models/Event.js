import moment from "moment";

export default class Event {
    constructor(data = {}) {
        this.id = data.id || 0;
        this.event_name = data.title || '';
        this.start_date = this.formatDate(data.start) || '';
        this.end_date = this.formatDate(data.end) || '';
        this.assignment = data.assignment || '';
    }
    formatDate(date) {
        return moment(date).format();
    }
}
