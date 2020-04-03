import React from 'react';
import User from './components/User'
import UserForm from './components/UserForm'

export default class App extends React.Component {
  state = {
    showNewUserForm: false,
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
  handleCreate = async (createData) => {
  let response = await fetch('http://localhost:3000/users', {
    body: JSON.stringify(createData),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  let data = await response.json()
  console.log(data)
  this.fetchPosts()
  this.newUser()
}
handleDelete = async id => {
    let response = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    this.fetchPosts()
  }
  newUser = () => {
    this.setState({
      showNewUserForm: !this.state.showNewUserForm
    })
  }
  render() {
    return(
      <div>
        <button onClick={this.newUser}>Add User</button>
        {this.state.showNewUserForm ?
        <UserForm handleCreate={this.handleCreate}/> :
        null
        }
        {this.state.users.map((user, i) => (
          <>
          <User
          key={i}
          user={user}
          handleDelete={this.handleDelete}
          />
          </>
        ))}
      </div>
    )
  }
}
