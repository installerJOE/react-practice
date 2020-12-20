import React from 'react'

function Modal(props){
  return(
    <div className="div-modal col-12">
      <div>
        <div className="modal-title-bar">
          <ul className="inline-ul">
            <li>
              {props.modaltitle}
            </li>
            <li className="modal-close-btn" onClick={() => props.handleModalExit()}>
              &times;
            </li>
          </ul>
        </div>
        <div className="modal-msg-body">
          <p>
            {props.modalmsg}
          </p>
          <p>
           <input
              onClick={() => props.handleModalOk()}
              type="button"
              value="Yes"
              className="btn btn-default"
            /> &nbsp; &nbsp;
            <input
              onClick={() => props.handleModalExit()}
              type="button"
              value="No"
              className="btn btn-default"
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modal