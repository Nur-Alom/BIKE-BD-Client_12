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
                            <NavLink to={`${url}/manageAllOrders`}>Manage All Orders</NavLink>
                            <br />
                            <NavLink to={`${url}/addProduct`}>Add A Product</NavLink>
                            <br />
                            <NavLink to={`${url}/makeAdmin`}>Make Admin</NavLink>
                            <br />
                            <NavLink to={`${url}/manageProduct`}>Manage Products</NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to={`${url}`}>My Orders</NavLink>
                            <br />
                            <NavLink to={`${url}/payment`}>Payment</NavLink>
                            <br />
                            <NavLink to={`${url}/review`}>Review</NavLink>
                        </div>
                    }
                    <br />
                    <button onClick={logout}>Logout</button>
                </div>
                <div className="col-md-10 nested-component">
                    <Switch>
                        <Route exact path={path}>
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