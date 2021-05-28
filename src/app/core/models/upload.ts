import { IUpload } from "../interfaces/upload";

export class Upload {
    id: string;
    cloudinary_id: string;
    image: string;
    title: string;
    created_at: Date;
    isLike: boolean;
    constructor(obj: IUpload) {
        this.id = obj._id;
        this.cloudinary_id = obj.cloudinary_id;
        this.image = obj.image;
        this.title = obj.title;
        this.created_at = new Date(obj.created_at);
        this.isLike = obj.isLike ? obj.isLike : false;
    }
}
