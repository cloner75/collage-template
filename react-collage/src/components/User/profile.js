import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/usersActions';

class Profile extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;

    return (
      <Fragment>
        {users.map((u) => (
          <Fragment key={u.id}>
            <h6>{u.name}</h6>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(Profile);
