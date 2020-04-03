import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.user.name}</h2>
      {this.props.user.carts.length > 0 ?
        this.props.user.carts.map( cart => (
        <h4>Items: {cart.item} bought at: {cart.origin}</h4>
          ))
      : null
        }
      <button>Edit</button>
      <button>Delete</button>
      <button>Add New Cart</button>
      </>
    )
  }
}
