import {UploadedFile} from "./uploadedFile.model";

export interface Technology {
    id: number,
    name: string,
    description: string,
    image: UploadedFile,
    questionCount: number,
}