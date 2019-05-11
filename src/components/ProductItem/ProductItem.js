import React, {Component} from 'react'

class ProductList extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td><span class="badge badge-warning">Còn Hàng</span></td>
        <td>
          <button type="button" class="btn btn-success mr-2">Thêm</button>
          <button type="button" class="btn btn-danger">Sửa</button>
        </td>
      </tr>
    )
  }
}

export default ProductList
