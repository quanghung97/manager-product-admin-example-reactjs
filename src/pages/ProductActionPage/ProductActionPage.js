import React, {Component} from 'react'
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom'

class ProductActionPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkbStatus: ''
    }
  }

  onChange = (e) => {
    let target = e.target
    let name = target.name
    let value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault()

    let {history} = this.props

    let {txtName, txtPrice, chkbStatus} = this.state
    callApi('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      history.goBack()
      // history.push('/') same same router.push vuejs
      // console.log(res)
    })
    // console.log(this.state)
  }

  render() {
    let {txtName, txtPrice, chkbStatus} = this.state

    return (
      <div>
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" 
                   className="form-control" 
                   placeholder="tên sản phẩm" 
                   name="txtName" 
                   value={txtName}
                   onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input type="number" 
                   className="form-control" 
                   placeholder="giá sản phẩm" 
                   name="txtPrice"
                   value={txtPrice}
                   onChange={this.onChange}/>
          </div>
          <div className="form-check">
            <input type="checkbox" 
                   className="form-check-input" 
                   name="chkbStatus" 
                   value={chkbStatus}
                   onChange={this.onChange}/>
            <label className="form-check-label">Còn Hàng</label>
          </div>
          <Link to="/product-list" className="btn btn-danger mr-2">
            Trở Lại
          </Link>
          <button type="submit" className="btn btn-primary">Lưu lại</button>
        </form>      
      </div>
    )
  }
}

export default ProductActionPage
