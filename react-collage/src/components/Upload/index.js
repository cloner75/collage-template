import { Component } from 'react';

class Car extends Component {
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

export default Car;
