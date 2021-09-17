import React, { Component } from 'react';
import AnhDemo1 from "../AnhDemo1.png" //ẢNH DEMO --XÓA--//
class SanPham extends Component {
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
    render() {
        let elements = this.state.products.map((product) => {
            return <li className="col-lg-2 col-md-3 col-sm-4">
                <div className="card ">
                    <div className="card__img">
                        <img className="img__product" src={AnhDemo1} alt="hình sản phẩm" />
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
            <div className="container">
                <div className="homedanhchoban">
                    <div className="title-danhchoban text-center">SẢN PHẨM GÌ ?</div>
                    <ul className="danhchoban row" >
                        {elements}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SanPham;