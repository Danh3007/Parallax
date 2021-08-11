import React, { Component } from "react";
import Banner from "./Banner";

class TrangChu extends Component {
  render() {
    return (
      <main className="container">
        <Banner />
        <div>
          <ul className="danhmuc">
            <li>
              <div className="card card1">
                <p className="card-img-top"/>
                <h6 className="card-title">THỜI TRANG</h6>
              </div>
              <div className="card card9">
                <p className="card-img-top"/>
                <h6 className="card-title">LÀM ĐẸP</h6>
              </div>
            </li>
            <li>
              <div className="card card2">
                <p className="card-img-top"/>
                <h6 className="card-title">BALO - TÚI</h6>
              </div>
              <div className="card card10">
                <p className="card-img-top"/>
                <h6 className="card-title">ĐỒ CHƠI</h6>
              </div>
            </li>
            <li>
              <div className="card card3">
                <p className="card-img-top"/>
                <h6 className="card-title">GIÀY - DÉP</h6>
              </div>
              <div className="card card11">
                <p className="card-img-top"/>
                <h6 className="card-title">NHÀ SÁCH</h6>
              </div>
            </li>
            <li>
              <div className="card card4">
                <p className="card-img-top"/>
                <h6 className="card-title">TRANG SỨC &amp; PHỤ KIỆN</h6>
              </div>
              <div className="card card12">
                <p className="card-img-top"/>
                <h6 className="card-title">THIẾT BỊ GIA DỤNG</h6>
              </div>
            </li>
            <li>
              <div className="card card5">
                <p className="card-img-top"/>
                <h6 className="card-title">THỜI TRANG TRẺ EM</h6>
              </div>
              <div className="card card13">
                <p className="card-img-top"/>
                <h6 className="card-title">NHÀ CỬA &amp; ĐỜI SỐNG</h6>
              </div>
            </li>
            <li>
              <div className="card card6">
                <p className="card-img-top"/>
                <h6 className="card-title">MẸ &amp; BÉ</h6>
              </div>
              <div className="card card14">
                <p className="card-img-top"/>
                <h6 className="card-title">THỂ THAO &amp; DU LỊCH</h6>
              </div>
            </li>
            <li>
              <div className="card card7">
                <p className="card-img-top"/>
                <h6 className="card-title">THIẾT BỊ ĐIỆN TỬ</h6>
              </div>
              <div className="card card15">
                <p className="card-img-top"/>
                <h6 className="card-title">VĂN PHÒNG PHẨM</h6>
              </div>
            </li>
            <li>
              <div className="card card8">
                <p className="card-img-top"/>
                <h6 className="card-title">SỨC KHỎE	&amp; GIA ĐÌNH</h6>
              </div>
              <div className="card card16">
                <p className="card-img-top"/>
                <h6 className="card-title">BÁCH HÓA ONLINE</h6>
              </div>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default TrangChu;
