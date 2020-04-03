import React from 'react';

export default class UserForm extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      money: 0
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreate(this.state)
    this.setState({
      name: '',
      money: 0
    })

  }

render () {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="your name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          Budget
          <input type="number" id="money" placeholder="budget" value={this.state.money} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Add user"/>
      </form>
      </>
    )
  }
}
