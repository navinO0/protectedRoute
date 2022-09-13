// Write your JS code here
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link-item">
      <p className="header-item">Home</p>
    </Link>
    <Link to="/about" className="link-item">
      <p className="header-item">About</p>
    </Link>
  </div>
)

export default withRouter(Header)
