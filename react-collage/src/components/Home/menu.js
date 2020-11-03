import { Component } from 'react';
import { Link } from 'react-router-dom'
import './../../assets/styles/menu.css';
class Menu extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link className='link' to="/">خانه</Link>
          </li>
          <li>
            <Link className='link' to="/login">ورود</Link>
          </li>
          <li>
            <Link className='link' to="/signUp">ثبت نام</Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Menu;
