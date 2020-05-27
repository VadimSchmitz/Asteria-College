export default class Student {
    constructor(data = {}) {
        this.id = data.id;
        this.first_name = data.first_name || "";
        this.last_name = data.last_name || "";
        this.class = data.class;
        this.present = data.present;
    }
}
