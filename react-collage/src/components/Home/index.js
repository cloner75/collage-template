import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { getUsers } from './../../store/actions/usersActions';
import { GetUsers } from './../../store/actions/user';


class Home extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.GetUsers();
  }

  render() {
    const { users } = this.props.users;
    return (
      <div>
        {users.docs ? users.docs.map(item => (
          <Fragment key={item._id}>
            <p>{item._id} :{item.username}</p>
          </Fragment>
        )) : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { GetUsers })(Home);

