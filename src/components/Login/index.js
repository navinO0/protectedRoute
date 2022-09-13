// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  loginSuccess = () => {
    const {history} = this.props
    Cookies.set('jwt_token', 'logged', {expires: 30})
    history.replace('/')
  }

  renderLogin = () => {
    const Token = Cookies.get('jwt_token')
    if (Token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1 className="login-heading">Please Login</h1>
        <button type="button" className="button" onClick={this.loginSuccess}>
          Login with Sample Creds
        </button>
      </div>
    )
  }

  render() {
    return <div>{this.renderLogin()}</div>
  }
}

export default Login
