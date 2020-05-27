export default class Event {
    constructor(data = {}) {
        this.id = data.id;
        this.event_name = data.title || data.event_name;
        this.start_date = this.formatDate(data.start) || this.formatDate(data.start_date);
        this.end_date = this.formatDate(data.end) || this.formatDate(data.end_date);
        this.assignment = data.assignment;
    }
    formatDate(date) {
        return date;
    }
}
