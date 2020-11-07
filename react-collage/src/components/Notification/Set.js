import { Component, Fragment } from 'react';
import './../../assets/styles/signin.css'

class SetNotification extends Component {
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
      <Fragment>
        <div id="set_notification">
          <p>
            <label>title</label></p>
          <p>
            <input type="text" />
          </p>
          <p>
            <label>body</label></p>
          <p>
            <textarea />
          </p>
          <p>
            <input type="button" value="send" />
          </p>
        </div>
      </Fragment>
    );
  }
}

export default SetNotification;
