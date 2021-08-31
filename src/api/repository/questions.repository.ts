import axios from "axios";

const fetchQuestion = (attemptId: string) => axios.get("/question", {
    params: {
        attemptId
    }
})

export default {fetchQuestion};