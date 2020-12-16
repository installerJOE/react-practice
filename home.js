import React, {Component} from 'react'

class HomeBlock extends Component{
  render(){
    const mainBodyStyle = {
      float: "none",
      margin: "auto"
    } 
    return(
      <div>
        <div className="intro-div col-12">
            <h1>
              You are most highly welcome to the Department of Computer Engineering.
            </h1>
        </div>
        <div style={mainBodyStyle} className="main-body-div col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <h3>
            Get the best of education by enrolling as a computer engineer.
          </h3>
        </div>
      </div>
    )  
  }
}

export default HomeBlock