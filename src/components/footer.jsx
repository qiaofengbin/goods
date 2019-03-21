import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../static/css/style.css'

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            <span>首页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" activeClassName="active">
            <span>列表页</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            <span>登录页</span>
          </NavLink>
        </li>
      </ul>
    </footer>
    )
  }
}
export default Footer;