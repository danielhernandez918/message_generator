import React, { useState } from 'react';
import './App.css';
import MessageForm from './components/messageComponent';
import MessageDisplay from './components/messageDisplayComponent';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const[messages, setMsgs] = useState([]);

  const handleNewMessage = (newMessage) =>{
    setCurrentMsg(newMessage)
    setMsgs([...messages, newMessage])
  }
  return (
    <div className="App">
        <MessageForm onNewMessage={handleNewMessage}/>
        <MessageDisplay currentMSG={currentMsg} messages={messages} />
    </div>
  );
}

export default App;
