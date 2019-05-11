import React, {Component} from 'react'

class ProductActionPage extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" className="form-control" placeholder="tên sản phẩm" />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input type="number" className="form-control" placeholder="giá sản phẩm" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">Còn Hàng</label>
          </div>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>      
      </div>
    )
  }
}

export default ProductActionPage
