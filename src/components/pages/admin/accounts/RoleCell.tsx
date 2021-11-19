import React from 'react'
import {GridCellParams} from "@material-ui/data-grid";
import {includes, size} from "lodash-es";
import {Chip} from "@material-ui/core";
import {editUserPermission} from "../../../../store/admin/admin.actions";
import {useDispatch} from "../../../../store/store";
import AddRolePopover from "./AddRolePopover";
import {Role, RoleLabel} from "../../../../api/model/user.model";


interface PropsType {
    params: GridCellParams
}

const RoleCell = (props: PropsType) => {
    const dispatch = useDispatch();
    const roles: Role[] = props.params.value as Role[]

    const {email} = props.params.row

    const handleDelete = (role: Role) => {
        dispatch(editUserPermission(role, email, false));
    }


    const isFullRoles = size(roles) == Object.values(Role).length
    return (
        <div style={{width: '20em'}}>
            {includes(roles, Role.ADMIN) && (
                <Chip
                    label={RoleLabel[Role.ADMIN]}
                    color="secondary"
                    onDelete={() => handleDelete(Role.ADMIN)}
                />
            )}

            {includes(roles, Role.MOD) && (
                <Chip
                    label={RoleLabel[Role.MOD]}
                    color="primary"
                    onDelete={() => handleDelete(Role.MOD)}
                />
            )}
            {includes(roles, Role.USER) && (
                <Chip
                    label={RoleLabel[Role.USER]}
                    onDelete={() => handleDelete(Role.USER)}
                />
            )}
            {!isFullRoles && (
                <AddRolePopover
                    userEmail={email}
                    roles={roles}
                />
            )}
        </div>
    )
}
export default RoleCell