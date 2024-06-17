import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
import ChatMessage from './ChatMessage'
import {data} from '../Utils/data';

const Conversation = ({userId, deleteChat}) => {

  const [chat, setChat] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    getDetails();
  },[userId, deleteChat])

  function getDetails(){
    for(let i=0;i<data.length;i++){
      if(data[i]["userId"] === userId){
        if(deleteChat[userId]){
          setChat([]);
        }
        else{
          setChat(data[i]["chat"])
        }
        setUserName(data[i]["name"])
      }
    }
  }
  

  return (
    <div className='conversation-container'>
      <ChatHeader userId={userId} userName={userName}/>
      <div className='chat-container'>
        {chat.map((item,index)=>{
          return <div key={index}>
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <ChatMessage text={item[`${userId}`]} from="user"/>
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ChatMessage text={item["you"]} from="you"/>
          </div>
          </div>
        })}
      </div>
      <ChatFooter userName={userName}/>
    </div>
  )
}

export default Conversation