import React, { Component } from 'react'
import Loader from './components/loader'
import './style.css'
import Header from './header'
import Footer from './footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './home'
import Blog from './blog'
import Library from './library'
import AboutUs from './about_us'
import Data from './data'
import SignIn from './sign'
import ModalControl from './components/modalCtrl'
import DashboardBlock from './components/dashboard'



class App extends Component {
  constructor(){
    super();
    this.state = {
      loaderStat: true,
      isLoggedIn: false,
      showModal: false,
      screenWidth: window.innerWidth,
      jsonData: {}
    }
    this.handleMenuLogIn = this.handleMenuLogIn.bind(this)
  }
  
  componentDidMount(){  
    /*
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json()) //convert fetched result to js object
      //store result in json format to jsonData state and remove loader
      .then(data => { 
        this.setState({
          loaderStat: false,
          jsonData: data
        })
      })
      .catch(error => {
        console.error(error)
      })
    */
    
    setTimeout(() => {
      this.setState(
        prev => {
          return{
            loaderStat: !prev.loaderStat //toggle the loader status
          }
        }
      )
    }, 1500)
  }
  
  handleMenuLogIn(){
    this.setState(
      prev=>{
        return{
          isLoggedIn: !prev.isLoggedIn //toggle the log in status 
        }
      }
    )
  }

  render(){    
    let logStatus
    logStatus = this.state.isLoggedIn ? "Sign Out" : "Sign In"
    
    return (
      <Router>
        
        {
          //bring in the loader
          this.state.loaderStat ? <Loader/> :
          <div className="App">
            <Header sign={logStatus} handleMenu={this.handleMenuClick}/>
            
            <Route path={"/"} exact component={Home}/>
            <Route path={"/library"} component={Library}/>
            <Route path={"/data"} component={Data}/>
            <Route path={"/blog"} component={Blog}/>
            <Route path={"/about-us"} component={AboutUs}/>
            <Route path={"/dashboard"} component={DashboardBlock}/>
            <Route path={"/sign-in"} component={SignIn}/>
            
            <Footer/>
          </div>
       }
      </Router>
    );
  }
}

export default App;
