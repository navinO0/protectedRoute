// Write your JS code here

import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const About = props => {
  const {history} = props
  const onClickLogout = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1 className="about-text">About Route</h1>
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default About
