import { Component } from 'react';
import Menu from './../Home/menu';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }
  shoot() {
    alert('beshoot');
  }

  render() {
    return (
      <div>
        <Menu />
        <h1>SignUp</h1>
        <h1>color state: {this.state.color} </h1>
        <h2>color props: {this.props.color} </h2>
        <button
          style={{
            backgroundColor: 'silver',
            color: 'black',
            padding: '10px',
          }}
          onClick={this.shoot}
        >
          Take the shot!
        </button>
      </div>
    );
  }
}

export default SignUp;
