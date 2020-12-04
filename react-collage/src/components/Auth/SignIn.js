import { Component } from 'react';
import { connect } from 'react-redux';
import { AuthSignIn } from './../../store/actions/user'
import Auth from './../../helper/Auth';
import './../../assets/styles/signin.css'

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  check = () => {
    this.props.AuthSignIn({ username: this.state.username, password: this.state.password })
  }


  render() {
    const { token } = this.props;
    if (token) {
      Auth.setToken(token)
    }
    return (
      <div>
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
const mapStateToProps = (state) => {
  return state.AuthSignIn.loading ? { token: { loading: true } } : { token: state.AuthSignIn.users.token }
};

export default connect(mapStateToProps, { AuthSignIn })(SignIn);
