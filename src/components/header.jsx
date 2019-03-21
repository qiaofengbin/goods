import React, { Component } from 'react';
import '../static/css/style.css'

class Header extends Component{
  render(){
    return(
      <header className="header">
        {this.props.children}
      </header>
    )
  }
}
export default Header;