import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class NavMenu extends Component{
  render(){
    return(
      <NavLink
        exact activeClassName="active-menu" 
        to={this.props.menulist.link} 
        className="nav-links" 
        style={{float: this.props.menulist.floatRight && "right"}}
      >
        {this.props.menulist.title}
      </NavLink>
    )
  }
}

export default NavMenu