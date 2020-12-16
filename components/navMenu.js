import React, {Component} from 'react'

class NavMenu extends Component{
  render(){
    return(
      <li onClick={()=> this.props.handleMenuClick(this.props.menulist.hyperlink, this.props.menulist.id)}>
        <a>
          {this.props.menulist.title}
        </a>
      </li>    
    )
  }
}

export default NavMenu