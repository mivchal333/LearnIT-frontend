import React from 'react'
import {Role, RoleLabel} from "../../../api/model/user.model";
import {includes} from "lodash-es";
import {Chip, Grid} from "@material-ui/core";

interface PropsType {
    roles: Role[],
}

const RolesField = (props: PropsType) => {
    const {roles} = props;
    return (
        <Grid container spacing={1}>
            <Grid item>
                {includes(roles, Role.ADMIN) && (
                    <Chip
                        label={RoleLabel[Role.ADMIN]}
                        color="secondary"
                    />
                )}
            </Grid>
            <Grid item>
                {includes(roles, Role.MOD) && (
                    <Chip
                        label={RoleLabel[Role.MOD]}
                        color="primary"
                    />
                )}
            </Grid>
            <Grid item>
                {includes(roles, Role.USER) && (
                    <Chip
                        label={RoleLabel[Role.USER]}
                    />
                )}
            </Grid>
        </Grid>
    )
}
export default RolesField