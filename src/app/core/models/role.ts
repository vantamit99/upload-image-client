import { IRole } from "../interfaces/role";

export class Role {
    id: string;
    name: string;
    constructor(obj: IRole) {
        this.id = obj.id || '',
        this.name = obj.name || ''
    }
}