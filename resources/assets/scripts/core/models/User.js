export class User {
    constructor({id = 0, name = '', email = '', first_name = '', last_name = ''} = {}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.firstName = first_name;
        this.lastName = last_name;
    }
}

export function createUser(data) {
    return Object.freeze(new User(data));
}
