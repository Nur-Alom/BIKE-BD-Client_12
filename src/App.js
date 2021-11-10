import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import LoadProducts from './Pages/Home/Products/LoadProducts';
import Login from './Pages/UserAccount/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/UserAccount/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/UserAccount/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allProducts">
              <LoadProducts></LoadProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            {/* <Route path="">

            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
