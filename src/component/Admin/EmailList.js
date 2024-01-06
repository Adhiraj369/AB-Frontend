import React, { Fragment, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getEmail,
} from "../../actions/emailAction";

import { useAlert } from "react-alert";
import SideBar from "./Sidebar";



const EmailList = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { error, emails } = useSelector((state) => state.emails);
    // const { email } = emails


    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getEmail());
    }, [dispatch, alert, error]);

    const columns = [
        { field: "id", headerName: "ID", minWidth: 200, flex: 0.5 },

        {
            field: "email",
            headerName: "Email",
            minWidth: 350,
            flex: 1,

            // renderCell: (params) => {
            //     return (
            //         <div>
            //             <Fragment>
            //                 <Link to={`/admin/emails/${params.getValue(params.id, "id")}`} />
            //             </Fragment>
            //         </div>
            //     )
            // }
        },

    ]
    // console.log(emails)

    const rows = emails.map((item, index) => ({
        id: index + 1, // You can use the index as the ID or use item.id if you have it
        email: item.email,
    }));
    // const rows = [];

    // emails &&
    //     emails.forEach((item) => {

    //         console.log("data :", item.email);
    //         rows.push({
    //             id: item.id,
    //             email: item.email,
    //         });
    //     });

    return (<>
        <div className="dashboard">

            <SideBar />
            <div className="productListContainer">
                <h1 id="productListHeading">ALL EMAILS</h1>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    className="productListTable"
                    autoHeight
                />
            </div>
        </div>
    </>)
}

export default EmailList;