import React, { Component } from 'react';

import callApi from '../../../utils/apiCaller';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }
    
    async componentDidMount() {
        let Product = await callApi("product/Product", "POST", {_id: "61428ba6ac4e3f2a741930b9"});
        console.log(Product);
        this.setState({
            product: Product.data,
        });
    }

    render() {
        console.log(this.state.product);
        let total = this.state.product.priceProduct - (this.state.product.priceProduct * this.state.product.saleProduct / 100)
        // const elements = this.state.product.map(e=>{
        //     return "danh"
        // })
        return (
            <div className="container">
                <div className="main">
                    <div className="detail">
                        <div className="detail__imgSrc">
                            <div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="pic-1">
                                        <img src={"./images/"+this.state.product.imgProduct1} alt="logo-shop" className="detail__img" ></img>
                                    </div>
                                    <div className="tab-pane" id="pic-2">
                                        <img src={"./images/"+this.state.product.imgProduct2} alt="logo-shop" className="detail__img"></img>
                                    </div>
                                    <div className="tab-pane" id="pic-3">
                                        <img src={"./images/"+this.state.product.imgProduct3} alt="logo-shop" className="detail__img"></img>
                                    </div>
                                </div>
                                {/*tao tab anh*/}
                                <ul className="nav nav-tabs respon">
                                    <li className="active">
                                        <a href="#pic-1" data-toggle="tab">
                                            <img alt="product_info" id="dichuyen" src={"./images/"+this.state.product.imgProduct1} className="detail__img--tab" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pic-2" data-toggle="tab">
                                            <img alt="product_info" id="dichuyen" src={"./images/"+this.state.product.imgProduct2} className="detail__img--tab" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#pic-3" data-toggle="tab">
                                            <img alt="product_info" id="dichuyen" src={"./images/"+this.state.product.imgProduct3} className="detail__img--tab" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="detail__infomation">
                            <h2 className="main__label">TÊN SẢN PHẨM: {this.state.product.nameProduct}</h2>
                            <div className="form-inline">
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            </div>
                            <hr />
                            <h4 className="main__span">Giá tiền lúc đầu: <span style={{textDecoration: "line-through"}}>{this.state.product.priceProduct}</span> VND</h4>
                            <h4 className="main__span">Giảm giá {this.state.product.saleProduct}%</h4>
                            <h4 style={{color: "red"}} className="main__span">Giá tiền hiện tại: {total} VND</h4>
                            <h4 className="main__span">Còn lại: {this.state.product.quantityProduct} sản phẩm</h4>
                            <br />

                            <button className="btn main__btn" type="submit"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    <div className="description">
                        <h3 className="main__label">Giới thiệu sản phẩm</h3>
                        <p className="main__span">{this.state.product.ỉntroduceProduct}</p>
                    </div>
                    <div className="description">
                        <h3 className="main__label">Đánh giá</h3>
                        <p className="main__span">Chưa có đánh giá nào</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;