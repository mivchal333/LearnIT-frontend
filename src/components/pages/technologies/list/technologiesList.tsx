import React, {useEffect} from "react";
import {useDispatch} from "../../../../store/store";
import {fetchTechnologies} from "../../../../store/technologies/actions";
import {
    selectSelectedTechnologiesIds,
    selectTechnologies,
    setSelectManyEnabled
} from "../../../../store/technologies/technologies.slice";
import {useSelector} from "react-redux";
import {isEmpty, values} from "lodash-es";
import TechnologyListItem from "./TechnologyListItem";
import AddTechnologyButton from "./AddTechnologyButton";
import {ButtonGroup, makeStyles} from "@material-ui/core";
import {selectIsModerator, selectUserLoggedIn} from "../../../../store/user/user.slice";
import TechnologiesBanner from "./TechnologiesBanner";
import SelectManyButton from "./SelectManyButton";
import StartCardsButton from "../../common/StartCardsButton";
import StartQuizButton from "../../common/StartQuizButton";


const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: "1em"
    },
    listWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    actionButtons: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

const TechnologiesList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const technologies = useSelector(selectTechnologies)
    const isLoggedIn = useSelector(selectUserLoggedIn)
    const isModerator = useSelector(selectIsModerator)
    const selectedIds = useSelector(selectSelectedTechnologiesIds)

    useEffect(() => {
        dispatch(fetchTechnologies())

        return () => {
            dispatch(setSelectManyEnabled(false))
        }
    }, [])


    return <div className={classes.root}>
        <TechnologiesBanner/>
        {isLoggedIn && (
            <ButtonGroup className={classes.actionButtons}>
                {!isEmpty(selectedIds) && (
                    <>
                        <StartQuizButton variant="outlined" color="primary"/>
                        <StartCardsButton variant="outlined" color="primary"/>
                    </>
                )}
                <SelectManyButton/>
                {isModerator && (
                    <AddTechnologyButton/>
                )}
            </ButtonGroup>
        )}
        <div className={classes.listWrapper}>
            {values(technologies).map((technology) => (
                <TechnologyListItem technology={technology} key={technology.id}/>
            ))}
        </div>
    </div>
}
export default TechnologiesList;