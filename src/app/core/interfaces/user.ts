import { IRole } from "./role";

export interface IUser {
    id: string;
    firstname?: string;
    lastname?: string;
    email: string;
    image: string;
    role?: IRole;
}
