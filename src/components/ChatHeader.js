import React from "react";
import ConversationTitle from "./ConversationTitle";
import VideoIcon from "../Images/VideoIcon.png";
import CallIcon from "../Images/CallIcon.png";
import MenuVertical from '../Images/MenuVertical.png';
import user1 from "../Images/profile-image-1.png";
import user2 from "../Images/profile-image-2.png";
import user3 from "../Images/profile-image-3.png";


const ChatHeader = ({userId, userName}) => {
  return (
    <div className="chat-header">
      <ConversationTitle 
      profile={ userId === "user1" ? user1 : userId === "user2" ? user2 : user3} 
      showStatus={ userId === "user1" ? true : false} 
      userName={userName}
      />
      <div className="chat-options">
        <div style={{paddingTop: "2px"}}>
        <img className="video-icon" src={VideoIcon} alt="video-icon" />
        </div>
        <img className="call-icon" src={CallIcon} alt="call-icon" />
        <div style={{paddingBottom: "2px"}}>
        <img className="menu-vertical" src={MenuVertical} alt='menu'/>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
