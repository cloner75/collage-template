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
        <div id="profile">
          <div>
            <div className="title">type</div>
            <div className="value">User</div>
          </div>
          <div>
            <div className="title">username</div>
            <div className="value">ehsan</div>
          </div>
          <div>
            <div className="title">email</div>
            <div className="value">ehsan.younesi.1375@gmail.com</div>
          </div>
          <div>
            <div className="title">rent</div>
            <div className="value">User</div>
          </div>
          <div>
            <div className="title">score</div>
            <div className="value">2000</div>
          </div>
          <div>
            <div className="title">status</div>
            <div className="value">User</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(Profile);
