// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'
import Header from '../Header'

const Home = props => {
  const {history} = props
  const onClickLogout = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
  }
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="heading-item">Home Route</h1>
        <button type="button" className="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default Home
