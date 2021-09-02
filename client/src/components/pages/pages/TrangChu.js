import React, { Component } from "react";
import Banner from "./Banner";

class TrangChu extends Component {
  constructor(props) {
    super(props)
    this.state={
      products : [
        {id: 1, nameProduct: "THỜI TRANG", imgsrc: "card1"},
        {id: 2, nameProduct: "BALO - TÚI", imgsrc: "card2"},
        {id: 3, nameProduct: "GIÀY - DÉP", imgsrc: "card3"},
        {id: 4, nameProduct: "TRANG SỨC & PHỤ KIỆN", imgsrc: "card4"},
        {id: 5, nameProduct: "THỜI TRANG TRẺ EM", imgsrc: "card5"},
        {id: 6, nameProduct: "MẸ & BÉ", imgsrc: "card6"},
        {id: 7, nameProduct: "THIẾT BỊ ĐIỆN TỬ", imgsrc: "card7"},
        {id: 8, nameProduct: "SỨC KHỎE	& GIA ĐÌNH", imgsrc: "card8"},
        {id: 9, nameProduct: "LÀM ĐẸP", imgsrc: "card9"},
        {id: 10, nameProduct: "ĐỒ CHƠI", imgsrc: "card10"},
        {id: 11, nameProduct: "NHÀ SÁCH", imgsrc: "card11"},
        {id: 12, nameProduct: "THIẾT BỊ GIA DỤNG", imgsrc: "card12"},
        {id: 13, nameProduct: "NHÀ CỬA & ĐỜI SỐNG", imgsrc: "card13"},
        {id: 14, nameProduct: "THỂ THAO & DU LỊCH", imgsrc: "card14"},
        {id: 15, nameProduct: "VĂN PHÒNG PHẨM", imgsrc: "card15"},
        {id: 16, nameProduct: "BÁCH HÓA ONLINE", imgsrc: "card16"},
      ]
    }
  }
  
  render() {
    let elements = this.state.products.map((product) => {
      return  <li key={product.id}>
                <div className={"card "+product.imgsrc}>
                  <p className="card-img-top"/>
                  <h6 className="card-title">{product.nameProduct}</h6>
                </div>
              </li>
    })
    return (
      <main className="container">
        <Banner />
        <div>
          <ul className="danhmuc">
            {elements}
          </ul>
        </div>
      </main>
    );
  }
}

export default TrangChu;
