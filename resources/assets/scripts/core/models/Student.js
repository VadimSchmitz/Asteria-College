export default class Students {
    constructor(data = {}) {
        this.id = data.id || 0;
        this.first_name = data.first_name || '';
        this.last_name = data.last_name || '';
        
    }
}
