import { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, getData } from './../../redux/action';

class CounterApp extends Component {
  handleIncrement = () => this.props.dispatch(increment());
  handleDecrement = () => this.props.dispatch(decrement());
  handleData = () => this.props.dispatch(getData());

  componentDidMount = () => {
    console.log('props', this.props);
  };

  render() {
    console.log(this.props.data);
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <p>
          {this.props.name} : {this.props.counter}
        </p>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleData}>getData</button>
      </div>
    );
  }
}
const mapStateToPropse = (state) => {
  return state;
};

export default connect(mapStateToPropse)(CounterApp);
