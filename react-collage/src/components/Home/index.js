import React, { Component } from 'react';
import Menu from './menu';
import { connect } from 'react-redux';
import { getUsers } from './../../store/actions/usersActions';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.users;
    return (
      <div>
        <Menu />
        {users.map(item => (
          <React.Fragment key={item.id}>
            <p>{item.id} :{item.username}</p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  users: state.users });

export default connect(mapStateToProps, { getUsers })(Home);

