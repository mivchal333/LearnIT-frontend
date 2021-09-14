import axios from "axios";

const fetchTechnologies = () => axios.get("/technology")
const fetchTechnology = (id: number) => axios.get(`/technology/${id}`)

const TechnologyRepository = {fetchTechnologies, fetchTechnology};
export default TechnologyRepository