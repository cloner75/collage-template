import { Component,Fragment } from 'react';
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
        {users.map(item => (
          <Fragment key={item.id}>
            <p>{item.id} :{item.username}</p>
          </Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({  users: state.users });

export default connect(mapStateToProps, { getUsers })(Home);

