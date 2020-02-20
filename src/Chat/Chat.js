import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";

function Chat(props) {

    let [chatSystem, updateChat] = useState([])
    let [input, updateInput] = useState(null)




  useEffect(() => {
    socketIOClient("https://notary-now-chat.herokuapp.com").on("chat message", data => {
      updateChat(chatSystem => [...chatSystem, data])
    })
  }, [])

    return (
        <div className="chat">
          CHAT: <button className="x" onClick={() => props.showChat(false)}>X</button>
          {chatSystem.map(text => {
            return <p>{text}</p>
          })}
        <div className="chat-input"><input
        onChange={(event) => updateInput(event.target.value)}
        onKeyPress={(event)=>{
          if (event.key === 'Enter') {
            socketIOClient("https://notary-now-chat.herokuapp.com").emit('chat message', input)
            event.target.value = ''
          }
        }}
        type="text" placeholder="enter message"/></div>
        </div>
    );
}

export default Chat;
