import axios, {AxiosResponse} from "axios";
import {Technology} from "../model/technology.model";
import {FileUploadedMessage} from "../model/fileUploadedMessage.model";
import {CreateTechnologyPayload} from "../../store/technologies/createTechnologyPayload";

const fetchTechnologies = () => axios.get("/technology")
const fetchTechnology = (id: number) => axios.get(`/technology/${id}`)
const createTechnology = (technologyPayload: CreateTechnologyPayload): Promise<AxiosResponse<Technology>> => axios.post(`/technology`, technologyPayload)
const remove = (technologyId: number): Promise<AxiosResponse<void>> => axios.delete(`/technology/${technologyId}`,)

const uploadImageFile = (formData: FormData): Promise<AxiosResponse<FileUploadedMessage>> => axios.post('/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

const TechnologyRepository = {fetchTechnologies, fetchTechnology, createTechnology, remove, uploadImageFile};
export default TechnologyRepository