import { Component, Fragment } from 'react';
import './../../assets/styles/signin.css'

class GetClassify extends Component {
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
        <div id="get_classify">
          <table>
            <tr>
              <th>ردیف</th>
              <th>نام</th>
              <th>شماره دانشجویی</th>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
            <tr>
              <td>1</td>
              <td>احسان یونسی</td>
              <td>0520964098</td>
            </tr>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default GetClassify;
