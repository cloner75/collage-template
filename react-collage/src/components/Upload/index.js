import { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);
  }
  shoot() {
    alert('beshoot');
  }

  render() {
    return (
      <div>
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

export default Upload;
