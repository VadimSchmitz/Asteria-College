export class Courses {
    constructor({id = 0, name = '', level = '', color = '', } = {})  {
        this.id = id;
        this.name = name;
        this.level = level;
        this.color = color;

    }
}

export function createCourses(data) {
    return Object.freeze(new Courses(data));
}