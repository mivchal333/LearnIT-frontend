import React, {useEffect} from "react";
import {useDispatch} from "../../store/store";
import {fetchTechnologies} from "../../store/technologies/actions";
import {selectTechnologies} from "../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {values} from "lodash-es";
import TechnologyListItem from "./TechnologyListItem";
import AddTechnologyButton from "./AddTechnologyButton";


const TechnologiesList = () => {
    let dispatch = useDispatch();
    const technologies = useSelector(selectTechnologies)


    useEffect(() => {
        dispatch(fetchTechnologies())
    }, [])


    return <div>
        <AddTechnologyButton/>
        {values(technologies).map((technology) => (
            <TechnologyListItem technology={technology}/>
        ))}
    </div>
}
export default TechnologiesList;