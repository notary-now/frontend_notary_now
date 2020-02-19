import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      response: ['Chat'],
      endpoint: "http://127.0.0.1:3001",
      input: null
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("chat message", data => {
      this.setState(prevState => (
      {
      response: [...prevState.response, data]
    }))}
  )

  }

  render() {
    const { response } = this.state;
    return (
        <div className="chat">
          {response.map(text => {
            return <p>{text}</p>
          })}
        <input onChange={(event) => this.setState({input: event.target.value})} type="text" placeholder="enter message"/><button onClick={()=>{

          const { endpoint } = this.state;
          const socket = socketIOClient(endpoint);
          socket.emit('chat message', this.state.input)

        }}>Submit</button>
        </div>
    );
  }
}

export default Chat;
