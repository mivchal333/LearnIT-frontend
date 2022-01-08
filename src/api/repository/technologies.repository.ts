import axios, {AxiosResponse} from "axios";
import {Technology} from "../model/technology.model";
import {FileUploadedMessage} from "../model/fileUploadedMessage.model";
import {TechnologyDataPayload} from "../model/technologyDataPayload";

const fetchTechnologies = (): Promise<AxiosResponse<Technology[]>> => axios.get("/api/technology")

const fetchTechnology = (id: number) => axios.get(`/api/technology/${id}`)

const createTechnology = (technologyPayload: TechnologyDataPayload): Promise<AxiosResponse<Technology>> => axios.post(`/api/technology`, technologyPayload)

const editTechnology = (id: number, technologyPayload: TechnologyDataPayload): Promise<AxiosResponse<Technology>> => axios
    .put(`/api/technology/${id}`, technologyPayload)

const remove = (technologyId: number): Promise<AxiosResponse<void>> => axios.delete(`/api/technology/${technologyId}`,)

const uploadImageFile = (formData: FormData): Promise<AxiosResponse<FileUploadedMessage>> => axios.post('/api/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

const TechnologyRepository = {
    fetchTechnologies,
    fetchTechnology,
    createTechnology,
    remove,
    uploadImageFile,
    editTechnology
};
export default TechnologyRepository