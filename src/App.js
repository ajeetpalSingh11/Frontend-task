import { useEffect, useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Conversation from './components/Conversation';

function App() {

  const [userId, setUserId] = useState("user1");
  const [deleteChat, setDeleteChat] = useState({});

 const handleContactCardClick =(userId)=>{
  setUserId(userId);
 }

 const handleDeleteChat = (userId)=>{
  const deleteChatCopy = {...deleteChat};
  deleteChatCopy[userId] = true;

  setDeleteChat(deleteChatCopy);
 }

  return (
    <div className='app-container'>
    <ContactList handleContactCardClick={handleContactCardClick} handleDeleteChat={handleDeleteChat} deleteChat={deleteChat}/>
    <Conversation userId={userId} deleteChat={deleteChat}/>
    </div>
  );
}

export default App;
