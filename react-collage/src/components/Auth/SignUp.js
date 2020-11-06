import { Component } from 'react';
import './../../assets/styles/signup.css'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  check = () => {
    console.log(`user:${this.state.username},pass:${this.state.password}`)
  }


  render() {
    return (
      <div>
        <div id="signUp">
          <h1>SignUp</h1>
          <p>
            <label>username</label>
            <input type="text" name="username" onChange={this.inputChangeHandler} />
          </p>
          <p>
            <label>password</label>
            <input type="password" name="password" onChange={this.inputChangeHandler} />
          </p>
          <p>
            <button onClick={this.check}>SignUp</button>
          </p>
        </div>

      </div>
    );
  }
}

export default SignUp;
