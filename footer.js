import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div id="footer_contact">
          <ul className="inline-ul">
            <li>
              <b>Address:</b> University of Benin, Ugbowo Campus, Benin City, Edo State  
            </li>
            <li>
              <b>Email:</b> support@aces.uniben.edu
            </li>
            <li>
              <b>Phone:</b> +234 817 7973 486, +234 706 6531 006
            </li>
          </ul>
        </div>
        <div>
          &copy; 2020. Department of Computer Engineering
        </div>
      </div>
    )
  }
}

export default Footer