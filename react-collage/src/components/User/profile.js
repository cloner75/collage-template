import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { GetUser } from '../../store/actions/user';
const userType = {
  true: 'user',
  false: 'admin',
  'Not Found': 'Not Found'
}
class Profile extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.GetUser('5f9187e983ca761038a5ed0c');
  }

  render() {
    const { user } = this.props;
    return (
      < Fragment >
        <div id="profile">
          <div>
            <div className="title">isUser</div>
            <div className="value">{userType[user.isUser]}</div>
          </div>
          <div>
            <div className="title">username</div>
            <div className="value">{user.username}</div>
          </div>
          <div>
            <div className="title">email</div>
            <div className="value">{user.email}</div>
          </div>
          <div>
            <div className="title">rent</div>
            <div className="value">User</div>
          </div>
          <div>
            <div className="title">score</div>
            <div className="value">{user.loading ? '' : user.score.sum}</div>
          </div>
          <div>
            <div className="title">status</div>
            <div className="value">{user.status}</div>
          </div>
        </div>
      </Fragment >
    );
  }
}

const mapStateToProps = (state) => {
  return state.GetUser.loading ? { user: { loading: true } } : { user: state.GetUser.users.docs[0] }
};

export default connect(mapStateToProps, { GetUser })(Profile);
