import {useSelector} from "../store/store";
import {selectUserAttemptId} from "../store/shared/game/game.slice";
import {isEmpty} from "lodash-es";
import {useHistory} from "react-router-dom";
import {GET_ROUTE} from "../route/routes";
import {useEffect} from "react";

export const useRequireUserAttempt = () => {
    const history = useHistory();
    const userAttemptId = useSelector(selectUserAttemptId);

    useEffect(() => {
        if (isEmpty(userAttemptId)) {
            history.push(GET_ROUTE.HOME())
        }
    }, [history, userAttemptId])
    return userAttemptId
}