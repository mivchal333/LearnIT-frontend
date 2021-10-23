import axios, {AxiosResponse} from "axios";
import {Technology} from "../model/Technology.model";
import {CreateTechnologyPayload} from "../../components/pages/technologies/add/AddTechnologyForm";

const fetchTechnologies = () => axios.get("/technology")
const fetchTechnology = (id: number) => axios.get(`/technology/${id}`)
const createTechnology = (technologyPayload: CreateTechnologyPayload): Promise<AxiosResponse<Technology>> => axios.post(`/technology`, technologyPayload)
const remove = (technologyId: number): Promise<AxiosResponse<void>> => axios.delete(`/technology/${technologyId}`,)

const TechnologyRepository = {fetchTechnologies, fetchTechnology, createTechnology, remove};
export default TechnologyRepository