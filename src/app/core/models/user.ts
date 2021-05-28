import { IUser } from "../interfaces/user";
import { Role } from "./role";

export class User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    image: string;
    role: Role;
    constructor(obj: IUser) {
        this.id = obj.id,
        this.firstname = obj.firstname || '',
        this.lastname = obj.lastname || '',
        this.email = obj.email;
        this.image = obj.image;
        this.role = obj.role ? new Role(obj.role) : null
    }
    fullname() {
        if(!this.firstname && !this.lastname) {
            return this.email;
        }
        return `${this.lastname} ${this.firstname}`
    }
}
