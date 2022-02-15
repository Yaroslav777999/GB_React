import React, { useState } from "react";

export const Form = ({ addMessage }) => {
    const [text, setText ] = useState('');
    const handleText = (ev) => {
        ev.preventDefault();
        addMessage(text);
    };
return (
    <form onSubmit={addMessage}>
        <input type="text" onChange={ev => setText(ev.target.value)} />
        <button type='submit'>Send</button>
    </form>
);
};