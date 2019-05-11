import React, {Component} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'

class ProductListPage extends Component {

  showProducts(products) {
    let result = null
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem key={index}
                       product={product}
                       index={index}
          />
        )
      })
    }
  }

  render() {
    let products = []
    return (
        <div>
          <button className="btn btn-info mb-2">
              Thêm sản phẩm
          </button>
          <ProductList>
            {this.showProducts(products)}
          </ProductList>
        </div>
    )
  }
}

export default ProductListPage
