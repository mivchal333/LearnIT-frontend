import React from 'react'
import {DataGrid, GridColDef} from '@material-ui/data-grid';
import RoleCell from "./RoleCell";
import {UserModel} from "../../../../api/model/user.model";

const columns: GridColDef[] = [
    {
        field: 'id',
        hide: true,
    },

    {
        field: 'firstName',
        headerName: 'Imie',
        flex: 1,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Nazwisko',
        flex: 1.5,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        flex: 2,
        editable: true,
    },
    {
        field: 'roles',
        headerName: 'Role',
        sortable: false,
        flex: 3,
        renderCell: (params) => (<RoleCell params={params}/>),
    },
];

interface PropsType {
    rows: UserModel[]
}

const AccountsTable = (props: PropsType) => {
    const rows = props.rows.map(user => ({
        ...user,
        id: user.email,
    }));
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            autoHeight
        />
    )
}
export default AccountsTable