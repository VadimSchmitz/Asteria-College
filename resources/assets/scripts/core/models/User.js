export class User {
    constructor({id = 0, name = ``, firstName = ``, lastName = ``, email = ``, createdAt = new Date()} = {}) {
        this.id = id;
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdAt = createdAt;
    }
}

export function createUser(data) {
    return Object.freeze(new User(data));
}
