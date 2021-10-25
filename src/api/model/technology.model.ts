import {UploadedFile} from "./uploadedFile.model";

export interface Technology {
    id: number,
    name: string,
    description: string,
    createDate: string,
    updateDate: string,
    image: UploadedFile
}