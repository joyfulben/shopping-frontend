import React from 'react';


export default class App extends React.Component {
  state = {
    users: []
  }
  componentDidMount() {
    this.fetchPosts()
  }
  fetchPosts = async () => {
    let response = await fetch('http://localhost:3000/users')
    let data = await response.json()
    console.log(data)
    this.setState({ users: data })
  }
  render() {
    return(
      <div>
        {this.state.users.map((user, i) => (
          <>
          <h2>{user.name}</h2>
          {user.carts.length > 0 ?
            user.carts.map(cart => (
            <h4>Items: {cart.item} bought at: {cart.origin}</h4>
              ))
          : null
            }


          </>
        ))}
      </div>
    )
  }
}
