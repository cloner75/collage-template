import { Component } from 'react';
import Menu from './menu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default Home;
