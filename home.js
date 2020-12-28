import React, {Component} from 'react'


class Home extends Component{
  /*
  constructor(){
    super();
    this.state = {
      
    }
  }*/
  render(){
    const introImgDiv = {
      backgroundImage: "url('/images/img1.jpg')",
      width: "100%",
      backgroundSize: "cover",
      opacity: "0.15",
      backgroundRepeat: "no-repeat",
      height: window.innerHeight - 170,
      float: "none",
      color: "#fff",
      position: "relative"
    }
    return(
      <div>
        {/**Container for opening image */}
        <div className="intro-div col-12" style=
        {
          { 
            float: "none", 
            backgroundColor: "#d9d9d9",
            padding: "0px 150px",
          }
        }>
          <div style={{backgroundColor: "#00141a"}} id="div_introImg">
            <div style={introImgDiv}>
              <h1>An Ultimate Source of Biological Tehnology</h1>  
            </div>       
          </div>
          
        </div>
        <div style={{float: "none", margin: "auto"}} className="main-body-div col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <h3>
            Get the best of education by enrolling as a computer engineer.
          </h3>
        </div>
      </div>
    )  
  }
}

export default Home