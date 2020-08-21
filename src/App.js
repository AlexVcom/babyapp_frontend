import React, {Component} from 'react';
import AppNavbar from './componets/AppNavbar.js';
import Footer from './componets/Footer.js';
import Home from './componets/Home.js';
import About from './componets/About.js';
import Contact from './componets/Contact.js';
import User from './componets/User Profile.js';
import NotFoundPage from './componets/Not Found Page.js';
import Registration from './componets/Registration.js';
import AdminUserEdit from './componets/AdminED.js'
import UserEdit from './componets/UserEdit.js'
import Login from './componets/Login.js'

import { BrowserRouter as Router,
  Route,Switch, Redirect, Link

} from 'react-router-dom';
// import Switch from 'react-bootstrap/esm/Switch';
// import ReactDOM from 'react-dom';


class App extends Component {

  logout = () => {
    localStorage.clear();
    // this.setState({username : "", isAuthenticated : false});
  }

  render() {    
    // formatowanie shift+option+f
    // return musi zwracać środek 
    return <div>
      <Router>
        <AppNavbar/>
        <Switch>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/api/about" component={About}/>
        <Route path="/api/contact" component={Contact}/>
        <Route path="/api/user/:id" component={User}/>
        <Route path="/api/registration" component={Registration}/>
        <Route path="/api/login" component={Login}/>
        <Route path="/api/admin" exact={true} component={AdminUserEdit}/>
        <Route path="/api/edit/:id" component={UserEdit}/>
        <Route path="/404" component={NotFoundPage}/>
        <Redirect to="/404"/>
        </Switch>
      </Router>
      <Footer/>
    </div>
   
  }
}

export default App;
