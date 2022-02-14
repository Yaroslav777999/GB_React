import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <>
        <h3>My name is {this.props.name}</h3>
        <button>Button</button>
      </>
    )
  }
}