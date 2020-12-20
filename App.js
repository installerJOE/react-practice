import React, { Component } from 'react'
import Loader from './components/loader'
import './style.css'
import Header from './header'
import HomeBlock from './home'
import BlogBlock from './blog'
import LibraryBlock from './library'
import AboutUsBlock from './about_us'
import DataBlock from './data'
import SignInBlock from './sign'
import ModalControl from './components/modalCtrl'
import Dashboard from './components/dashboard'



class App extends Component {
  constructor(){
    super();
    this.state = {
      loaderStat: true,
      isLoggedIn: false,
      clickedLinkId: 1,
      showModal: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  
  componentDidMount(){  
    setTimeout(() => {
      this.setState(
        prev => {
          return{
            loaderStat: !prev.loaderStat //toggle the loader status
          }
        }
      )
    }, 2500)
  }
  
  /*
  componentDidUpdate(prevProp, prevState, snapShot){
    if(prevState.showModal){
      alert(this.state.showModal)
      /*this.setState({
        showModal: true
      })
    }
    else{
      alert("This is not working yet " + this.state.showModal)
    }
  }
  */
  
  handleMenuClick(link, id){
    if(link === "sign"){
      this.setState(
        prev=>{
          return{
            isLoggedIn: !prev.isLoggedIn //toggle the log in status 
          }
        }
      )
    }
    else if(link === "dashboard"){
      this.setState(prev=>{
        return{
          showModal: !prev.showModal
        }
      })    
    }
    else{
      this.setState(
        prev=>{
          return{
            clickedLinkId: (prev.clickedLinkId % prev.clickedLinkId) + Number(id)
          }
        }
      )
      if(id==="6"){
        this.setState(prev=>{
          return{
            showModal: !prev.showModal
          }
        })    
      }
    }
  }

  render(){    
    let logStatus
    logStatus = this.state.isLoggedIn ? "Sign Out" : "Sign In"
    
    return (
      <div className="App">
        <Header sign={logStatus} handleMenu={this.handleMenuClick}/>
        {
          //bring in the loader
          this.state.loaderStat && <Loader/>
        }
        {
          //roger in the sign in block
          this.state.isLoggedIn && <SignInBlock handleSignExit={this.handleMenuClick}/>
        }
        {
          //render the home page
          this.state.clickedLinkId===1 && <HomeBlock/>
        }
        {
          //render the library page
          this.state.clickedLinkId===2 && <LibraryBlock/>
        }
        { 
          //render the data page
          this.state.clickedLinkId===3 && <DataBlock/>
        }
        {  
          //render the block page
          this.state.clickedLinkId===4 && <BlogBlock/>}
        {
          //render the About Us page
          this.state.clickedLinkId===5 && <AboutUsBlock/>
        }
        {
          //render the Dashboard page
          this.state.showModal && <ModalControl handleCloseModal={this.handleMenuClick}/>
        }
        {
          //render the Dashboard page
          this.state.clickedLinkId===6 && <Dashboard/>
        }
        <div>
          <h1></h1>
        </div>
      </div>
    );
  }
}

export default App;
