import React from 'react'
import Attach from '../Images/Attach-Icon.png';
import Voice from '../Images/Voice-Icon.png';
import Send from '../Images/Send-Icon.png';

const ChatFooter = ({userName}) => {
  return (
    <div className='chat-footer'>
      <div className='footer-icons-div'>
      <img className="footer-icon" src={Attach} alt="attach"/>
      <img className="footer-icon" src={Voice} alt="voice"/>
      </div>
      <div className='footer-input-div'>
        <div className='footer-input'>{`Message ${userName}`}</div>
        <img className="footer-icon" src={Send} alt="voice"/>
      </div>
    </div>
  )
}

export default ChatFooter;
