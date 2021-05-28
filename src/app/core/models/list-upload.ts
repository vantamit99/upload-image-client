import { IListUpload } from './../interfaces/list-upload';

export class ListUpload {
    id: string;
    _user: string;
    _upload: string;
    constructor(obj: IListUpload) {
        this.id = obj._id;
        this._user = obj._user;
        this._upload = obj._upload;
    }
}
