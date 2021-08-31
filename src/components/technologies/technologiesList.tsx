import React, {useEffect} from "react";
import {useDispatch} from "../../store/store";
import {fetchTechnologies} from "../../store/technologies/actions";
import {selectTechnologies} from "../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {ROUTE} from "../../route/routes";
import {values} from "lodash-es";
import {Link} from "react-router-dom";

const TechnologiesList = () => {
    let dispatch = useDispatch();
    const technologies = useSelector(selectTechnologies)


    useEffect(() => {
        dispatch(fetchTechnologies())
    }, [])


    return <div>
        {values(technologies).map((technology) => (<div>
                <p>
                    {JSON.stringify(technology)}
                </p>
                <Button to={ROUTE.TECHNOLOGY + technology.id} component={Link}>Show</Button>
            </div>
        ))}
    </div>
}
export default TechnologiesList;