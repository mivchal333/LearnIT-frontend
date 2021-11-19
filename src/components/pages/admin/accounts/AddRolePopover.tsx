import React from 'react'
import {createStyles, IconButton, MenuItem, Paper, Popover, Select, Typography} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import {includes} from "lodash-es";
import {useDispatch} from "../../../../store/store";
import {editUserPermission} from "../../../../store/admin/admin.actions";
import {Role, RoleLabel} from "../../../../api/model/user.model";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        paper: {
            width: "14rem",
            height: "8rem",
            padding: theme.spacing(3),
        }
    }),
);

interface PropsType {
    userEmail: string,
    roles: Role[],
}

const AddRolePopover = (props: PropsType) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleClose = () => {
        setAnchorEl(null);
    };

    const availableRoles = Object.values(Role)
        .filter(role => !includes(props.roles, role))

    console.warn({availableRoles})

    const onChange = async (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const {target} = event
        const role = target.value as Role

        await dispatch(editUserPermission(role, props.userEmail, true));
        handleClose()
    }
    return (
        <>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <AddIcon/>
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Paper className={classes.paper}>
                    <Typography>Wybierz role</Typography>
                    <Select
                        fullWidth
                        onChange={onChange}
                    >
                        {availableRoles.map(role => (
                            <MenuItem value={role}>{RoleLabel[role]}</MenuItem>
                        ))}
                    </Select>
                </Paper>
            </Popover>
        </>
    )
}
export default AddRolePopover