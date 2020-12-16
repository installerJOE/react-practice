import React from 'react'
    
function Loader(){
  const loadBlockStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#f2f2f2",
    position: "fixed"
  }

  return(
    <div style={loadBlockStyle}>
      <div className='div-loaderBar'>
        {/*
        <h1 style={{textAlign: 'center'}}>Please wait as the page loads.</h1><br/>
        <div className='loader-object'>
          <div></div>
        </div><br/><br/>*/}
        <h1 style={{textAlign: 'center'}}>Please wait as the page loads...</h1><br/>
        <div className="ring-loader"></div>   
      </div> 
         
      

            

    </div>
  )
}
    
export default Loader