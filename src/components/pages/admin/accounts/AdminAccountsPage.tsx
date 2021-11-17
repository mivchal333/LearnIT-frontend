import React, {useEffect} from 'react'
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "../../../../store/store";
import AdminHeader from "./AdminHeader";
import AccountsTable from "./AccountsTable";
import {loadUsers} from "../../../../store/admin/admin.actions";
import {selectUsers} from "../../../../store/admin/admin.slice";


const AdminAccountsPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <Grid container spacing={2} direction="column">
            <Grid item>
                <AdminHeader/>
            </Grid>
            <Grid item>
                <AccountsTable rows={users}/>
            </Grid>
        </Grid>
    )
}
export default AdminAccountsPage