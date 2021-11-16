import React, {useEffect} from "react";
import {useDispatch} from "../../../../store/store";
import {fetchTechnologies} from "../../../../store/technologies/actions";
import {selectTechnologies} from "../../../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {values} from "lodash-es";
import TechnologyListItem from "./TechnologyListItem";
import AddTechnologyButton from "./AddTechnologyButton";
import {makeStyles} from "@material-ui/core";
import {selectUserLoggedIn} from "../../../../store/user/user.slice";
import TechnologiesBanner from "./TechnologiesBanner";


const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: "1em"
    },
    listWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    }
}))

const TechnologiesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const technologies = useSelector(selectTechnologies)
    const isLoggedIn = useSelector(selectUserLoggedIn)


    useEffect(() => {
        dispatch(fetchTechnologies())
    }, [])


    return <div className={classes.root}>
        {isLoggedIn && (
            <AddTechnologyButton/>
        )}
        <TechnologiesBanner/>
        <div className={classes.listWrapper}>
            {values(technologies).map((technology) => (
                <TechnologyListItem technology={technology} key={technology.id}/>
            ))}
        </div>
    </div>
}
export default TechnologiesList;