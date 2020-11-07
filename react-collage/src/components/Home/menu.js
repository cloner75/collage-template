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
          <li>
            <Link className='link' to="/dashboard/user/upload">آپلود فایل</Link>
          </li>
          <li>
            <Link className='link' to="/dashboard/user/profile">پروفایل</Link>
          </li>
          <li>
            <Link className='link' to="/dashboard/user/conversation">مکالمات</Link>
          </li>
          <li>
            <Link className='link' to="/dashboard/user/notifications">اعلانات</Link>
          </li>
          <li>
            <Link className='link' to="/dashboard/admin/set/notification">ارسال اعلانات</Link>
          </li>
          <li>
            <Link className='link' to="/dashboard/admin/set/classify">طبقه بندی </Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Menu;
