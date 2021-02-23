import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './components/authentication/SignUp';
import Profile from './components/Profile';
import LogIn from './components/authentication/LogIn';
import ForgotPassword from './components/authentication/ForgotPassword';
import UpdateProfile from './components/authentication/UpdateProfile';
import {AuthProvider} from './components/authentication/AuthContext';
import PrivateRoute from './components/authentication/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>

            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

            <PrivateRoute path="/user" component={Profile}/>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
