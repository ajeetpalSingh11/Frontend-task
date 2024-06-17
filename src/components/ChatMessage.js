import React from 'react'

const ChatMessage = ({text , from}) => {

  return (
    <div className={from === "you" ? 'chat-message you' : 'chat-message'} style={text?.message.length < 25 ? { borderRadius: "34px"} : { borderRadius : "44px"}}>
        <div className='chat-text'>{text?.message}</div>
        <div className={from === "you" ? 'chat-timestamp-you' : 'chat-timestamp'}>{text?.timeStamp}</div>
    </div>
  )
}

export default ChatMessage