import React, { useState, FC } from 'react';
import { Input, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import PropTypes from 'prop-types';



interface Message {
  text: string;
  author: string;
}

interface FormProps {
  addMessage: (message: Message) => void;
}


export const Form: FC<FormProps> = ({ addMessage }) => {
  const [text, setText] = useState('');
  
  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addMessage({
      text,
      author: 'User',
    });
    setText('');
  };

  
  return (
    <form onSubmit={handleText}>
          <Input placeholder='печатайте текст' value={text} onChange={(ev) => setText(ev.target.value)} autoFocus />
      <Button variant="contained" type="submit" color="success">
        Send
      </Button>
      <List></List>
    </form>

    
  );
};

Form.propTypes = {
  addMessage: PropTypes.any,
};
