import React, {Component} from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import ProductList from './components/ProductList/ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <button className="btn btn-info mb-2">
            Thêm sản phẩm
          </button>
          <ProductList />
        </div>
      </div>
    )
  }
}

export default App
