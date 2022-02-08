import React, { Fragment } from 'react'
import { Button } from './components/Button/Button';
import { Message } from './components/Message/Message';
import './App.module.css';


const name = 'Ivan';

function App() {
  return (
    <Fragment>
      < Message/>
      <h2 className={"header"}> Hello Geekbrains </h2>
      <Button name={name} />
    </Fragment>

  )
}

export default App;