import React from 'react';
import './Dashboard.css';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyOrders from './UserDashboard/MyOrders/MyOrders';
import Payment from './UserDashboard/Payment/Payment';
import Review from './UserDashboard/Review/Review';
import useAuth from '../../Hooks/useAuth';
import ManageAllOrders from './AdminDashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './AdminDashboard/AddAProduct/AddProduct';
import MakeAdmin from './AdminDashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './AdminDashboard/ManageProducts/ManageProducts';
import DashBoardHome from './DashBoardHome';

const DashBoard = () => {
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="row d-flex nested-body">
                <div className="col-md-2 nested-routing">
                    <NavLink to={`/`}>Home</NavLink>
                    {admin ?
                        <div>
                            <NavLink to={`${url}`}>Dashboard</NavLink>
                            <br />
                            <NavLink to={`${url}/manageAllOrders`}>Manage Orders</NavLink>
                            <br />
                            <NavLink to={`${url}/addProduct`}>Add A Product</NavLink>
                            <br />
                            <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                            <br />
                            <NavLink to={`${url}/manageProduct`}>Manage Products</NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to={`${url}`}>Dashboard</NavLink>
                            <br />
                            <NavLink to={`${url}/myOrder`}>My Orders</NavLink>
                            <br />
                            <NavLink to={`${url}/payment`}>Payment</NavLink>
                            <br />
                            <NavLink to={`${url}/review`}>Review</NavLink>
                        </div>
                    }
                    <br />
                    <button
                        onClick={logout}
                        style={{ margin: "0px" }}
                        className="user-btn bg-danger text-white py-1 px-3 rounded-3 border-0"><i className="fas fa-sign-out-alt"></i>Logout
                    </button>
                </div>
                <div className="col-md-10 nested-component">
                    <Switch>
                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageProduct`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;