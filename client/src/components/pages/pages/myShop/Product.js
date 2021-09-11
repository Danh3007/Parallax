import React, { Component } from 'react';

import callApi from '../../../../utils/apiCaller';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: "",
        };
      }
    
    async componentDidMount() {
        const email = localStorage.getItem("email");
        let myShop = await callApi("shop/getShop", "POST", { email: email });
        this.setState({
            id: myShop.data._id,
        });
    }

    onShowPage = (product) => {
        document.querySelector(".admin__table").style.display = "none"
        document.querySelector(".admin__btn").style.display = "none"
        const formPage = document.querySelector(".admin__form")
        formPage.style.display = "block"
    }

    onHandleSumbit = async(obj) => {
        obj.preventDefault()
        console.log(("danh"));
    }
    render() {
        return (
            <div>
                <div className="admin__option">
                    <div style={{display: "flex"}}>
                    <h3 className="main__label">Sắp xếp theo</h3>
                    <select onChange={this.onFilter} className="main__select">
                        <option value="asc">Từ A-Z</option>
                        <option value="desc">Từ Z-A</option>
                    </select>
                    </div>
                    <button onClick={(e) => this.onShowPage("")} className="admin__btn fas fa-edit">Đăng thêm sản phẩm</button>
                </div>
                <div className="admin__body">
                    <table className="admin__table table table-striped">
                        <thead>
                            <tr>
                            <td style={{ width: "20%", textDecoration: "underline" }} className="main__label" >Tên sản phẩm</td>
                            <td style={{ width: "30%", textDecoration: "underline" }} className="main__label" >Hình ảnh</td>
                            <td style={{ width: "50%", textDecoration: "underline" }} className="main__label" colSpan="3" >giá</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="main__label">giỏ sách guchi</td>
                            <td className="main__label">hình ảnh guchi</td>
                            <td className="main__label">giá tiền guchi</td>
                            <td style={{ width: "5%" }}>
                                <i title="Xem chi tiết" className="admin__icon fas fa-eye" ></i>
                            </td>
                            <td style={{ width: "5%" }}>
                                <i onClick={(e) => this.onShowPage("Thức ăn mèo")} title="Chỉnh sửa" className="admin__icon fas fa-edit"></i>
                            </td>
                            <td style={{ width: "5%" }}>
                                <i title="xóa" className="admin__icon fas fa-trash"></i>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <form className="admin__form">
                        <div className="form-group">
                            <label className="main__label">Tên sản phẩm</label>
                            <input type="text" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Giới thiệu sản phẩm</label>
                            <input type="text" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Thông tin chi tiết</label>
                            <input type="text" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Phân loại</label>
                            <input type="text" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Hình ảnh</label>
                            <input type="file" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Giá sản phẩm</label>
                            <input type="number" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Giảm giá (nếu có)</label>
                            <input type="number" className="main__input form-control" />
                        </div>
                        <div className="form-group">
                            <label className="main__label">Số lượng cần bán</label>
                            <input type="number" className="main__input form-control" />
                        </div>
                        <button onClick={() => window.location.reload()} className="btn main__btn">Trở về</button>
                        <button onClick={this.onHandleSumbit} style={{marginLeft: "10px"}} className="btn main__btn">Lưu</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Product;