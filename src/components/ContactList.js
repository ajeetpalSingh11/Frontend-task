import React, { useState } from 'react'
import ContactCard from './ContactCard';
import {data} from '../Utils/data';
import user1 from '../Images/profile-image-1.png';
import user2 from '../Images/profile-image-2.png';
import user3 from '../Images/profile-image-3.png';

const ContactList = ({handleContactCardClick, deleteChat, handleDeleteChat}) => {

  const [displayData, setDisplayData] = useState(data);

  const [showModal, setShowModal] = useState({});

  const handleCardClick =(userId)=>{
    handleContactCardClick(userId);
    handleDisplayData(userId,null);
  }

  const handleDisplayData = (userId,target)=>{

    const displayDataCopy = JSON.parse(JSON.stringify(displayData));

    for(let i=0;i<displayData.length;i++){
      if(displayData[i]["userId"] === userId){
        if(target === null){
          displayDataCopy[i]["unreadCount"] = 0;
          break;
        }
        else if(target === 'mark-as-unread'){
          displayDataCopy[i]["unreadCount"] = data[i]["unreadCount"] ;
          handleShowModal(userId,false);
          break;
        }
      }
      
    }

    setDisplayData(displayDataCopy);

  }

  const handleShowModal =(userId,val)=>{
    const showModalCopy = {...showModal};
    showModalCopy[userId] = val; 

    setShowModal(showModalCopy);
    
  }
  
  const handleModalItemClick=(userId, target)=>{
    if(target === "delete"){
      handleDeleteChat(userId);
      handleShowModal(userId,false);
    }
    handleDisplayData(userId,target)
  }

  return (
    <div className='contact-list-container'>
        <div className='chats-text'>Chats</div>
        <div className='contact-list'>
            {displayData.map((item,index)=>{

                return <ContactCard 
                key={item.userId}
                profile={index === 0 ? user1 : index === 1 ? user2 : user3} 
                showStatus={index=== 1 ? true: false} 
                userName={item.name} 
                userId={item.userId}
                recentText={item.chat[item.chat.length-1][`${item.userId}`]["message"]}
                unreadCount={item.unreadCount}
                handleContactCardClick={handleCardClick}
                deleteChat={deleteChat}
                showModal={showModal}
                handleShowModal={handleShowModal}
                handleModalItemClick={handleModalItemClick}
                />
            })}
        </div>
    </div>
  )
}

export default ContactList;