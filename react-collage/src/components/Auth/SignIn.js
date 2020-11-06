import { Component } from 'react';
import Menu from '../Home/menu';
import './../../assets/styles/signin.css'

class SignIn extends Component {
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
        <Menu />
        <div id="signIn">
          <h1>SignIn</h1>
          <p>
            <label>username</label>
            <input type="text" name="username" onChange={this.inputChangeHandler} />
          </p>
          <p>
            <label>password</label>
            <input type="password" name="password" onChange={this.inputChangeHandler} />
          </p>
          <p>
            <button onClick={this.check}>SignIn</button>
          </p>
        </div>

      </div>
    );
  }
}

export default SignIn;
