import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import callApi from "../../../utils/apiCaller";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedFile: null
    };
  }
  async componentDidMount() {
    let product = await callApi("getdata", "GET", null);
    this.setState({
      products: product.data,
    });
  }
  onFilter = () => {
    const option = document.querySelector("select");
    console.log(option.value);
  };

  onShowPage = async(e) => {
    const showForm = document.querySelector(".admin__form")
    const onNew = document.querySelector(".admin__option--btn")
    const adminApi = showForm.querySelector("#adminApi")
    showForm.style.display = "block"
    onNew.style.display = "none"
    const nameProduct = showForm.querySelector("#nameProduct")
    const activeName = showForm.querySelector(".activeName")
    const messNotity = showForm.querySelector(".form-message")
    showForm.addEventListener("focus", (e) => {
      messNotity.innerHTML=""
    }, true)
    if (e.target.title !== "") {
      activeName.innerHTML = "Chọn sửa: " + e.target.title
      nameProduct.value = e.target.title
      let active = e.target.title
      adminApi.innerHTML="Sửa"
      adminApi.onclick = (e) => {
        e.preventDefault()
        if (nameProduct.value.length !== 0 && this.state.selectedFile !== null) {
          let formData = new FormData()
          formData.append("activeName", active)
          formData.append("nameProduct", nameProduct.value)
          formData.append("addressImg", this.state.selectedFile)
          formData.append("imgProduct", this.state.selectedFile.name)
          const addProduct = callApi("updatedata","POST", formData)
          console.log(addProduct);
          window.location.reload();
        } else {
          messNotity.innerHTML = "Mời nhập đầy đủ dữ liệu"
        }
      }
    } else {
      adminApi.onclick = (e) => {
        e.preventDefault()
        if (nameProduct.value.length !== 0 && this.state.selectedFile !== null) {
          let formData = new FormData()
          formData.append("nameProduct", nameProduct.value)
          formData.append("addressImg", this.state.selectedFile)
          formData.append("imgProduct", this.state.selectedFile.name)
          const addProduct = callApi("postdata","POST", formData)
          console.log(addProduct);
          window.location.reload();
        } else {
          messNotity.innerHTML = "Mời nhập đầy đủ dữ liệu"
        }
      }
    }
  }
  onChangeFile = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  onRemovePage = (nameProduct) => {
    confirmAlert({
      title: 'Cảnh báo !!!',
      message: 'Bạn có muốn xóa ' + nameProduct,
      buttons: [
        {
          label: 'Đồng ý',
          onClick: async() => {
            const removePage = await callApi("removedata", "POST", {nameProduct: nameProduct})
            console.log(removePage);
            window.location.reload();
          }
        },
        {
          label: 'Không đồng ý',
          onClick: () => {console.log("quay lại");}
        }
      ]
    });
  }

  render() {
    let elements = this.state.products.map((product) => {
      return (
        <tr key={product.nameProduct}>
          <td className="admin__txt">{product.nameProduct}</td>
          <td>
            <img className="admin__img" src={"./images/" + product.imgProduct} alt="hình ảnh" />
          </td>
          <td style={{ width: "5%" }}>
            <i onClick={this.onShowPage} title={product.nameProduct} className="admin__icon fas fa-edit"></i>
          </td>
          <td style={{ width: "5%" }}>
            <i onClick={(e) => this.onRemovePage(product.nameProduct)} className="admin__icon fas fa-trash"></i>
          </td>
        </tr>
      );
    });
    return (
      <div className="container" style={{ minHeight: "500px" }}>
        <div className="admin__caption">Nhóm sản phẩm</div>
        <hr style={{ width: "80%", margin: "10px auto" }} />
        <div className="admin__option">
          <div className="admin__filter">
            <h3 className="admin__filter--text">Sắp xếp theo</h3>
            <select onChange={this.onFilter} className="admin__filter--select">
              <option value="asc">Từ A-Z</option>
              <option value="desc">Từ Z-A</option>
            </select>
          </div>

          <button onClick={this.onShowPage} className="admin__option--btn fas fa-edit">
            Đăng thêm ngành
          </button>
        </div>
        <div className="admin__body">
          <table className="admin__table table table-striped">
            <thead>
              <tr>
                <td style={{ width: "30%", textDecoration: "underline" }} className="admin__txt">Tên sản phẩm</td>
                <td style={{ width: "60%", textDecoration: "underline" }} className="admin__txt" colSpan="3">Hình ảnh</td>
              </tr>
            </thead>
            <tbody>{elements}</tbody>
          </table>
          <form className="admin__form" encType="multipart/form-data" >
            <p className="activeName admin__txt"></p>
            <div className="form-group">
              <label className="admin__txt">Tên Ngành</label>
              <input id="nameProduct" type="text" required className="admin__input form-control" />
            </div>
            <div className="form-group">
              <label className="admin__txt">Hình ảnh</label>
              <input onChange={this.onChangeFile} id="imgProduct" type="file" required className="admin__input form-control" />
            </div>
            <p className="form-message"></p>
            <button id="adminApi" className="btn admin__txt">Lưu</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Detail;
