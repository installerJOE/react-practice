import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavMenu extends Component{
  render(){
    return(
      <Link 
        to={this.props.menulist.link} 
        className="nav-links" 
        style={{float: this.props.menulist.floatRight && "right"}}
      >
        {this.props.menulist.title}
      </Link>
    )
  }
}

export default NavMenu