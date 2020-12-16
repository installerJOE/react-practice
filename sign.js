import React, { Component } from 'react'

class SignInBlock extends Component{
  render(){
    return(
      <div className="div-modal col-12">
        <div>
          <div className="modal-title-bar">
            <ul className="inline-ul">
              <li>
                Sign In
              </li>
              <li className="modal-close-btn" onClick={() => this.props.handleSignExit('sign')}>
                &times;
              </li>
            </ul>
          </div>
          <div className="modal-msg-body">
            <form>
              <label>Email Address:</label><br/>
              <input type="email" className="input-fields"/> <br/>
              <label>Password: </label><br/>
              <input type="password" className="input-fields"/><br/>
              <button type="button" className="btn btn-default" style={{margin:"2em 0em 1em 0em"}}
              onClick={()=>{alert("I have been submitted :)")}}>
                Sign In
              </button>  
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInBlock