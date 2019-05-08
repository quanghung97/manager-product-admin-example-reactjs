import React, {Component} from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Call API</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quản lý sản phẩm</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <button className="btn btn-info mb-2">
            Thêm sản phẩm
          </button>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><span class="badge badge-warning">Còn Hàng</span></td>
                  <td>
                    <button type="button" class="btn btn-success mr-2">Thêm</button>
                    <button type="button" class="btn btn-danger">Sửa</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><span class="badge badge-warning">Còn Hàng</span></td>
                  <td>
                    <button type="button" class="btn btn-success mr-2">Thêm</button>
                    <button type="button" class="btn btn-danger">Sửa</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><span class="badge badge-warning">Còn Hàng</span></td>
                  <td>
                    <button type="button" class="btn btn-success mr-2">Thêm</button>
                    <button type="button" class="btn btn-danger">Sửa</button>
                  </td>
                </tr>
              </tbody>
            </table>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default App
