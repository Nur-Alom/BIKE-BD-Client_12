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
                    <NavLink className="nested-btn" to={`/`}>Home <i class="fas fa-home nested-icon"></i></NavLink>
                    {admin ?
                        <div>
                            <NavLink className="nested-btn" to={`${url}`}>Dashboard <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/manageAllOrders`}>Manage Orders <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/addProduct`}>Add A Product <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/makeAdmin`}>Make Admin <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/manageProduct`}>Manage Products <i class="fas fa-angle-right nested-icon"></i></NavLink>
                        </div>
                        :
                        <div>
                            <NavLink className="nested-btn" to={`${url}`}>Dashboard <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/myOrder`}>My Orders <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/payment`}>Payment <i class="fas fa-angle-right nested-icon"></i></NavLink>
                            <br />
                            <NavLink className="nested-btn" to={`${url}/review`}>Review <i class="fas fa-angle-right nested-icon"></i></NavLink>
                        </div>
                    }
                    <hr />
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