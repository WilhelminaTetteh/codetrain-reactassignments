import React, { Component } from 'react';

class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: ''
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      }
    render() {
        return (
            <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
              <input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
              <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
    }
}

export default ClassForm;
