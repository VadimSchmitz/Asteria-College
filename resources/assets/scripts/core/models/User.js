export default class User {
    constructor(data = {}) {
        this.id = data.id || 0;
        this.name = data.name || '';
        this.email = data.email || '';
        this.first_name = data.first_name || '';
        this.prefix = data.prefix || '';
        this.last_name = data.last_name || '';
        this.is_admin = data.is_admin || false;
    }
}
