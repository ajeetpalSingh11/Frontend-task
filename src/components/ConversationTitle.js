import React from "react";
import status from '../Images/status.svg';

const ConversationTitle = ({userName, profile, showStatus}) => {
  return (
    <div className="conversation-title">
      <div className="profile-details">
        <img className="profile" src={profile} alt="profile" />
      </div>
      <div >
        <div className="user-status">
          <div className="user-name">{userName}</div>
          {showStatus ? <img className="user-title-status" src={status} alt="status"/> : null}
        </div>
        <div className="user-text">Click here for contact info</div>
      </div>
    </div>
  );
};

export default ConversationTitle;
