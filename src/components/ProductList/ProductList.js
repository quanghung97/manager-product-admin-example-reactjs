import React, {Component} from 'react'
import ProductItem from './../ProductItem/ProductItem'

class ProductList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Danh sách sản phẩm</div>
        <div className="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </tbody>
        </table>
        </div> 
      </div>
    )
  }
}

export default ProductList
