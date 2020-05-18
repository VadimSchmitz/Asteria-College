export class User {
    constructor(
        {
            id = Number,
            name = String,
            email = String,
            first_name = String,
            prefix= String,
            last_name = String,
            is_admin = Boolean
        } = {})
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.firstName = first_name;
        this.prefix = prefix;
        this.lastName = last_name;
        this.isAdmin = is_admin;
    }
}

export function createUser(data) {
    return Object.freeze(new User(data));
}
