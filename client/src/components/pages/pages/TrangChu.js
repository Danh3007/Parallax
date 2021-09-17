import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line
import Banner from "./Banner";
import AnhDemo from "../pages/AnhDemo.png" //ẢNH DEMO --XÓA--//
import callApi from "./../../../utils/apiCaller";

class TrangChu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { id: 1, imgsrc: "{AnhDemo}" },
        { id: 2, imgsrc: "{AnhDemo}" },
        { id: 3, imgsrc: "{AnhDemo}" },
        { id: 4, imgsrc: "{AnhDemo}" },
        { id: 5, imgsrc: "{AnhDemo}" },
        { id: 6, imgsrc: "{AnhDemo}" },
        { id: 7, imgsrc: "{AnhDemo}" },
        { id: 8, imgsrc: "{AnhDemo}" },
        { id: 9, imgsrc: "{AnhDemo}" },
        { id: 10, imgsrc: "{AnhDemo}" },
        { id: 11, imgsrc: "{AnhDemo}" },
        { id: 12, imgsrc: "{AnhDemo}" },
        { id: 13, imgsrc: "{AnhDemo}" },
        { id: 14, imgsrc: "{AnhDemo}" },
        { id: 15, imgsrc: "{AnhDemo}" },
        { id: 16, imgsrc: "{AnhDemo}" },
      ]
    }
  }

  componentDidMount() {
    callApi("getdata", "GET", null).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    let elements = this.state.products.map((product) => {
      return <li key={product._id}>
        <Link className="card" id="Link" to="/SanPham">
          <div className="card__img">
            <img className="img__product" src={"./images/" + product.imgProduct} alt="hình sản phẩm" />
          </div>
          <div className="card__text">
            <h6 className="text__product">{product.nameProduct}</h6>
          </div>
        </Link>
      </li>;

    });
    let elements1 = this.state.products.map((product) => {
      return <li className="col-lg-2 col-md-3 col-sm-4">
        <div className="card ">
          <div className="card__img">
            <img className="img__product" src={AnhDemo} alt="hình sản phẩm" />
          </div>
          <div className="card__text">
            <h6 className="text__product">ÁO KHOÁC DÙ BOMBER NAM NỮ NÚT BẤM, IN CHỮ SIÊU ĐẸP BÓNG CHÀY PHONG CÁCH TUỔI TEEN</h6>
            <h6 className="text__priceup">₫<span className="text__price-sale">66.500</span></h6>
            <h6 className="text__pricedown">
              <span className="text__vnd">₫</span>
              <span className="text__price-cost">95.000</span>
              <span className="text__percent"> -30%</span>
            </h6>
            <h6 className="sold text-right">
              <span className="text__soldtxt">Đã bán </span>
              <span className="text__sold">300</span>
            </h6>
          </div>
        </div>
      </li>
    })
    return (
      <main className="container">
        <Banner />
        <div className="homedanhmuc">
          <div className="title-danhmuc">DANH MỤC</div>
          <ul className="danhmuc">
            {elements}
          </ul>
        </div>
        <div>
          <div className="homedanhchoban">
            <div className="title-danhchoban text-center">DÀNH CHO BẠN</div>
            <ul className="danhchoban row" >
              {elements1}
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default TrangChu;
