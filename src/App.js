import {Switch, BrowserRouter, Redirect, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

import Login from './components/Login'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
