import React, { Component } from 'react'
import NavMenu from './components/navMenu'
import menuListArr from './components/navMenuList'
//import Modal from './components/modal'


class Header extends Component{
  
    render(){   
      const menuBlock = menuListArr.map(
        list => <NavMenu key={list.id} menulist={list} handleMenuClick={this.props.handleMenu}/>
      ) 
      //list of all menus at the right side of the navbar 
      const rightMenuList = [
        {
          id:"1",
          title: this.props.sign,
          hyperlink:"sign",
          floatRight: true
        }
      ].map(list => <NavMenu key={list.id} menulist={list} handleMenuClick={this.props.handleMenu}/>)
 
        return(
          <div>
            <div className="title-bar col-12">
              <h1>Department of Computer Engineering</h1>
            </div>
            <div id="div_navList" className="nav-bar col-12">
              <ul className="inline-ul">
                {/*All menu list items by the left of the nav bar */}
                {menuBlock}
                
                {/*Sign-in/Sign-out menu list item */}
                {rightMenuList}
              </ul>
            </div>
          </div>
        )
    }
}

export default Header