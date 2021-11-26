import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    age: '',
    gender:'',
  }

  state = this.initialState
  handleChange = (event) => {
    const {name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { name, age, gender } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          value={age}
          onChange={this.handleChange} />
          <label htmlFor="gender">Gender</label>
        <input
          type="text"
          name="gender"
          id="gender"
          value={gender}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default Form;
