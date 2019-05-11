import React, {Component} from 'react'

class ProductList extends Component {
  render() {
    let {product, index} = this.props
    let statusName = product.status ? 'Còn Hàng' : 'Hết Hàng'
    let statusClass = product.status ? 'warning' : 'default'
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`badge badge-${statusClass}`}>{statusName}</span></td>
        <td>
          <button type="button" className="btn btn-success mr-2">Thêm</button>
          <button type="button" className="btn btn-danger">Sửa</button>
        </td>
      </tr>
    )
  }
}

export default ProductList
