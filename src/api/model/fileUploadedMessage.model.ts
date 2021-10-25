import {UploadedFile} from "./uploadedFile.model";

export interface FileUploadedMessage extends UploadedFile {
    message: string
}