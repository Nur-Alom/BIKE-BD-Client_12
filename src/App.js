import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import LoadProducts from './Pages/Home/Products/LoadProducts';
import Login from './Pages/UserAccount/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/UserAccount/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
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
            <Route path="">

            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
