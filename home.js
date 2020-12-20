import React, {Component} from 'react'

class HomeBlock extends Component{
  render(){
    const mainBodyStyle = {
      float: "none",
      margin: "auto"
    } 
    const introImgDiv = {
      backgroundImage: "url('')"
    }
    return(
      <div>
        {/**Container for opening image */}
        <div className="intro-div col-12" style={introImgDiv}>            
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