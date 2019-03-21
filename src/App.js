import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from './views/home'
import List from './views/list'
import Login from './views/login'
// import Logins from './components/login1'
import './static/css/reset.css'

class App extends Component {
  render() {
    return (
      <div>
       
        <Router>
          <Fragment>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/list" component={List} />
              <Route path="/login" component={Login} />
              <Redirect to="/login"></Redirect>
            </Switch>
            
          </Fragment>
        </Router>
        
      </div>
    );
  }
}

export default App;
