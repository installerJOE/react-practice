import React, { Component } from 'react'
import Modal from './modal'



class ModalControl extends Component{
  constructor(){
    super()
    this.state={
      modalShow: true
    }
    this.closeModal = this.closeModal.bind(this)
    this.activateHiddenComponent = this.activateHiddenComponent.bind(this)
  }

  closeModal(){
    this.setState(prev=>{return{
      modalShow: !prev.modalShow
    }})
    
    //change state to false so that <ModalControl/> component in app.js
    //would not be rendered and automatically close the modal
    this.props.handleCloseModal("dashboard", "") 
  }

  //activate the hidden component when the okay btn of the modal is clicked
  activateHiddenComponent(){
    this.setState({
      modalShow: false   
    })   
    //change the state of clickedLinkdId so that the dashboard can be displayed
    this.props.handleCloseModal("", "6") 
  }

  render(){
    let modalMessage = this.state.modalShow && "Are you sure you wish to visit your dashboard?"
    let modalTitle = this.state.modalShow && "Permission to Show Dashboard"
    return(
      <div>
        {
          this.state.modalShow &&
          <Modal 
            handleModalExit={this.closeModal} 
            handleModalOk={this.activateHiddenComponent}
            modaltitle={modalTitle}
            modalmsg={modalMessage}
          />
        }
      </div>
    )    
  }
}

export default ModalControl