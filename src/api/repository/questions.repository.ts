import axios from "axios";

const fetchQuestions = (attemptId: string) => axios.get("/question", {
    params: {
        attemptId
    }
})

export default {fetchQuestions};