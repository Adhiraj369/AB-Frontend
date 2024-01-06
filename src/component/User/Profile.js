import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import { DataGrid } from "@material-ui/data-grid";
import { clearErrors, myOrders } from "../../actions/orderAction";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const { shippingInfo, productInfo } = useSelector((state) => state.cart);
  // const { error, orders } = useSelector((state) => state.myOrders);
  const { error, orders } = useSelector((state) => state.myOrders);
  const dispatch = useDispatch();
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   minWidth: 150,
    //   flex: 0.5,
    //   cellClassName: (params) => {
    //     return params.getValue(params.id, "status") === "Delivered"
    //       ? "greenColor"
    //       : "redColor";
    //   },
    // },
    {
      field: "name",
      headerName: "Event Name",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    // {
    //   field: "amount",
    //   headerName: "Amount",
    //   type: "number",
    //   minWidth: 270,
    //   flex: 0.5,
    // },

    // {
    //   field: "actions",
    //   flex: 0.3,
    //   headerName: "Actions",
    //   minWidth: 150,
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <Link to={`/order/${params.getValue(params.id, "id")}`}>
    //         {/* <LaunchIcon /> */}
    //       </Link>
    //     );
    //   },
    // },
  ];

  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        name: productInfo.name,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <div className='profile_page'>
            <div className='profile_heading'>
              <div class="horizontal-line1"></div>
              <h1 className='profile'>PROFILE</h1>
              <div class="horizontal-line1"></div>
            </div>
            <div className='all_events'>
              <div className='events_heading head1'>
                <div className='sub_events'>
                  <h2 className='events1 tag'>DETAILS</h2>
                  <div className='horizontal-line2 hl1'></div>
                </div>
                <div className='infobox user_details'>
                  <div className='profile_detail'>
                    <div className='d1'>Name: {user.name}</div>
                    <div className='d1'>Email: {user.email}</div>
                    {/* <div className='d1'>Contact No: 9876543210</div> */}
                  </div>
                </div>
              </div>
              <div className='events_heading head2'>
                <div className='sub_events'>
                  <h2 className='registered_events tag'>REGISTERED EVENTS</h2>
                  <div className='horizontal-line2 hl2'></div>
                </div>
                <div className='infobox event_details'>

                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    className="myOrdersTable"
                    autoHeight
                  />

                  {/* <div className='eventCard'>
                    <div className='event_detail'>
                      <div className='evnt_name'>{order.itemName}</div>
                      <div className='evnt_detail'>Solo Dance Competition</div>
                    </div>
                    <div className='reg_detail'>
                      <div className='evnt_reg'>Registered</div>
                      <div className='reg_name'>as Bobby Doel!</div>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>
          </div>






          {/* <main className="my__account">
            <section className="my__account--left">
              <div className="category__all">
                <div className="category__menu">
                  <h1>my account</h1>
                  <ul className="category__menu--items">
                    <li className="category__menu--item">
                      <button href="" id="deets">
                        my deets
                      </button>
                    </li>
                    <li className="category__menu--item">
                      <Link to="/orders" id="orders">my orders</Link>
                    </li>
                    <li className="category__menu--item">
                     
                      <button href="" id="wishlist">
                        order status
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="deets my__account--right border__left">
              <div>
                <div className="profile__pic">
                  <img src={"/Profile.png"} alt={user.name} className="profile__pic__img" />
                </div>
                <div className="details">
                  <p>name: {user.name}</p>
                  <p>registered e-mail: {user.email}</p>
                  <p><Link to="/password/update">Change Password</Link></p>
                </div>
                <hr />
              </div>
            </section>

            <section className="orders my__account--right border__left">
              <div className="order__status">
                <h1>my orders</h1>
              </div>

              <div>
                <table className="order__details">
                  <tr className="table__heading">
                    <th>order number</th>
                    <th>deets</th>
                    <th>Rs</th>
                    <th>date</th>
                    <th>status</th>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                  <tr>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>sit</td>
                    <td>amet.</td>
                  </tr>
                </table>

              </div>

            </section>
          </main> */}

        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
