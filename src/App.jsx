import React, { useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/Messagelist/MessageList';
import './index.css';

const defaultMessages = [
  {
    id: 1,
    author: "Geekbrains",
    text: 'Welcome to the chat',
  },
];


export const App = () => {
  const [ messages, setMessages ] = useState([defaultMessages]);


  const addMessage = (text) => {
    setMessages([...messages, {
      id: 2,
      author: 'User',
      text
    }])
   
  };

  // handleInputChange = (ev) => {
  //   this.setState({ text: ev.target.value });
  // };

  // handleInputChangeAutor = (ev) => {
  //   this.setState({ text: ev.target.value });
  // };


    return (
      <>
             <h1>Welcome to React</h1>
             <MessageList messages={messages} />
             <Form addMessage={addMessage}/>
      </>
    );
  };

