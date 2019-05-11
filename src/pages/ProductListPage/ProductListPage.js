import React, {Component} from 'react'
import ProductList from './../../components/ProductList/ProductList'
import ProductItem from './../../components/ProductItem/ProductItem'
import { connect } from 'react-redux'
import callApi from './../../utils/apiCaller'
import { Link } from 'react-router-dom'
import { actFetchProducts } from './../../actions/index'

class ProductListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    callApi('products', 'GET', null).then(res => {
      this.props.fetchAllProducts(res.data)
    })
  }

  showProducts(products) {
    let result = null
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem key={index}
                       product={product}
                       index={index}
                       onDelete={this.onDelete}
          />
        )
      })
    }
    return result
  }

  findIndex = (products, id) => {
    let result = -1
    products.forEach((product, index) => {
      if(product.id === id) {
        result = index
      }
    })
    return result
  }

  onDelete = (id) => {
    // console.log(id)
    let {products} = this.state
    callApi(`products/${id}`, 'DELETE', null).then(res => {
      if(res.status === 200) {
        let index = this.findIndex(products, id)
        if (index !== -1) {
          products.splice(index, 1)
          this.setState({
            products: products
          })
        }
      }
    })
  }

  render() {
    // let  { products }  = this.state // products API
    let  { products }  = this.props // products state from redux
    // let products = []
    return (
        <div>
          <Link to="/product/add" className="btn btn-info mb-2">
              Thêm sản phẩm
          </Link>
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
