import React, {Component} from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ProductList from './components/ProductList/ProductList'
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  showContentMenus = (routes) => {
    let result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{ result }</Switch>
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            {/* <button className="btn btn-info mb-2">
              Thêm sản phẩm
            </button>
            <ProductList /> */}

            { this.showContentMenus(routes) }
          </div>
        </div>
      </Router>
    )
  }
}

export default App
