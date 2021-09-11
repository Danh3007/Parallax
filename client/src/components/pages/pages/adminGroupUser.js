import React, { Component } from "react";
// import { confirmAlert } from 'react-confirm-alert'; // Import

import callApi from "../../../utils/apiCaller";

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  async componentDidMount() {
    let users = await callApi("auth", "GET", null);
    this.setState({
      users: users.data,
    });
  }
  onFilter = () => {
    const option = document.querySelector("select");
    console.log(option.value);
  };


  render() {
    let elements = this.state.users.map((user) => {
      return (
        <tr key={user.nameUser}>
          <td className="main__label">{user.nameUser}</td>
          <td className="main__label">{user.email}</td>
          <td className="main__label">{user.password}</td>
          <td style={{ width: "5%" }}>
            <i title="Chỉnh sửa" className="admin__icon fas fa-edit"></i>
          </td>
          <td style={{ width: "5%" }}>
            <i title="Xóa" className="admin__icon fas fa-trash"></i>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div className="main">
          <div className="main__caption" style={{fontWeight: "700"}}>Quản lí người dùng</div>
          <hr style={{ width: "80%", margin: "10px auto" }} />
          <div style={{display: "flex"}}>
            <h3 className="main__label">Sắp xếp theo</h3>
            <select onChange={this.onFilter} className="main__select">
              <option value="asc">Từ A-Z</option>
              <option value="desc">Từ Z-A</option>
            </select>
          </div>
          <div className="admin__body">
            <table className="admin__table table table-striped">
              <thead>
                <tr>
                  <td style={{ width: "30%", textDecoration: "underline" }} className="main__label">Tên người dùng</td>
                  <td style={{ width: "30%", textDecoration: "underline" }} className="main__label">Địa chỉ email</td>
                  <td style={{ width: "60%", textDecoration: "underline" }} className="main__label" colSpan="3">mật khẩu</td>
                </tr>
              </thead>
              <tbody>{elements}</tbody>
            </table>
            <form className="admin__form" >
              <div className="form-group">
                <label className="main__label">Tên người dùng</label>
                <input id="nameProduct" type="text" className="main__input form-control" />
              </div>
              <div className="form-group">
                <label className="main__label">Email người dùng</label>
                <input id="nameProduct" type="text" className="main__input form-control" />
              </div>
              <div className="form-group">
                <label className="main__label">Mật khẩu</label>
                <input id="imgProduct" type="file" className="main__input form-control" />
              </div>
              <p className="form-message"></p>
              <button id="adminApi" className="btn main__label">Lưu</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminUser;
