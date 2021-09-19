import React, { Component } from "react";
import Banner from "./Banner";

import callApi from "../../../../utils/apiCaller";

class TrangChu extends Component {
  constructor(props) {
    super(props)
    this.state={
      products : []
    }
  }

  componentDidMount() {
    callApi("getdata","GET",null).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    let elements = this.state.products.map((product) => {
      return  <li key={product._id}>
                <div className="card ">
                  <div className="card__img">
                    <img className="img__product" src={"./images/"+product.imgProduct} alt="hình sản phẩm" />
                  </div>
                  <div className="card__text">
                    <h6 className="text__product">{product.nameProduct}</h6>
                  </div>
                </div>
              </li>
    })
    let elements1 = this.state.products.slice(0,6).map((product) => {
      return  <li key={product._id} className="col-lg-2 col-md-3 col-sm-4">
                <div className="card ">
                  <div className="card__img">
                    <img className="img__product" src="./images/ao.jpg" alt="hình sản phẩm" />
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
          <div style={{textAlign: "center", paddingTop: "10px"}} className="main__label">DANH MỤC</div>
          <ul className="danhmuc">
            {elements}
          </ul>
        </div>
        <div>
          <div className="homedanhchoban">
            <div className="main__label text-center">DÀNH CHO BẠN</div>
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
