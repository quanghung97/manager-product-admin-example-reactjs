import React, {Component} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
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
    return result
  }

  render() {
    let  { products }  = this.props
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

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage)
