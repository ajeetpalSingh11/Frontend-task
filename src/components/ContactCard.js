import React, { useState } from 'react'
import status from '../Images/status.svg';
import MenuVertical from '../Images/MenuVertical.png';
import Ellipse from '../Images/Ellipse 1.png';
import Modal from './Modal';

const ContactCard = ({profile, showStatus, userName, userId, recentText, unreadCount, handleContactCardClick, deleteChat, showModal, handleShowModal, handleModalItemClick}) => {


  const handleClick =()=>{
    handleContactCardClick(userId);
  }

  const handleItemClick =(target)=>{
    if(target === "cancel"){
      handleShowModal(userId,false);
      return;
    }
    handleModalItemClick(userId,target);
  }


  return (
    <div className='contact-card' onClick={handleClick}>
        <div className='profile-details'>
        <img className="profile" src={profile} alt="profile"/>
        {showStatus ? <img className="status" src={status} alt="status"/> : null}
        </div>
        <div className='user-details'>
            <div className='user-name'>{userName}</div>
            {!deleteChat[userId] ?<div className='recent-details'>
            <div className='recent-text'>{recentText}</div>
            {unreadCount > 0 ? <div className='unread-msg'>
                <img className='eclipse' src={Ellipse} alt='eclipse'/>
                <div className='unread-count'>{unreadCount}</div>
            </div> : null}
            </div> : null}
        </div>
        <img className="menu-vertical" onClick={(e)=>{
          e.stopPropagation();
          handleShowModal(userId,true);
          }} 
          src={MenuVertical} alt='menu'/>
        {showModal[userId] ? <Modal handleItemClick = {handleItemClick}/> : null}
    </div>
  )
}

export default ContactCard