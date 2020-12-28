import React, {Component} from 'react'
import Loader from './components/loader'


class Library extends Component{
  constructor(){
    super();
    this.state = {
      loader: true,
      jsonData: {}
    }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=VqrY7zxaV178LulaQG1MOtOi5H81jNiZDggAgh2l")
      .then(data => data.json())
      .then(jsonResult => {
        this.setState({
          loader: false,
          jsonData: jsonResult
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render(){
    let apiResult = this.state.jsonData
    return(
      <div>
        {this.state.loader ? <Loader/> : 
          <div className="intro-div col-12">
            <h1>Hello Momma. This is the Library Page. Let me know how best I can help you.</h1>
            <h3>Title: {apiResult.title}</h3>
            <p>
              {apiResult.explanation}
            </p>
            <p style={{color: "#c2c2c2"}}>
              As told by {apiResult.copyright} as at {apiResult.date}
            </p>
            <div>
              <img src={apiResult.hdurl} height="100px"/>
            </div>
          </div>
        }
      </div>
    )     
  }
}

export default Library