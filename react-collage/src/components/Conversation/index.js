import { Component, Fragment } from 'react';
import userAvatar from './../../assets/images/userAvatar.png'
import './../../assets/styles/signin.css'

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  check = () => {
    console.log(`user:${this.state.username},pass:${this.state.password}`)
  }


  render() {
    return (
      <Fragment>
        <div id="conversation">
          {/* contacts */}
          <div id="contacts">
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
            {/* start items */}
            <div className="item">
              <img className="avatar" src={userAvatar} />
              <div className="title">ehsan</div>
              <div className="lastChat">ehsan this ...</div>
            </div>
            {/* end Items */}
          </div>
          {/* chat */}
          <div id="chat">
              <div id="box">
                <input type="text"/>
              </div>
          </div>

        </div>
      </Fragment>
    );
  }
}

export default Conversation;
