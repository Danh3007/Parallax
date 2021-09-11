import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div className="container">
                <div className="detail">
                    <div className="detail__imgSrc">
                        <div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="pic-1">
                                    <img src={"./images/list1.png"} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth" ></img>
                                </div>
                                <div className="tab-pane" id="pic-2">
                                    <img src={"./images/list2.png"} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                </div>
                                <div className="tab-pane" id="pic-3">
                                    <img src={"./images/list3.png"} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                </div>
                                <div className="tab-pane" id="pic-4">
                                    <img src={"./images/list4.png"} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                </div>
                                <div className="tab-pane" id="pic-5">
                                    <img src={"./images/list5.png"} style={{ width: '300px', height: '300px' }} alt="logo-shop" className="logoAuth"></img>
                                </div>
                            </div>
                            {/*tao tab anh*/}
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#pic-1" data-toggle="tab">
                                        <img alt="product_info" id="dichuyen" src={"./images/list1.png"} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-2" data-toggle="tab">
                                        <img alt="product_info" id="dichuyen" src={"./images/list2.png"} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-3" data-toggle="tab">
                                        <img alt="product_info" id="dichuyen" src={"./images/list3.png"} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-4" data-toggle="tab">
                                        <img alt="product_info" id="dichuyen" src={"./images/list4.png"} style={{ width: '60px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#pic-5" data-toggle="tab">
                                        <img alt="product_info" id="dichuyen" src={"./images/list5.png"} style={{ width: '60px' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="detail__infomation">
                    <h2>TÊN SẢN PHẨM</h2>
                        <div className="form-inline">
                            <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                        </div>
                        <hr />
                        <div className="backgroundform">
                            <h4 className="edith4">4444 vnđ</h4>
                            <div className="form-inline">
                                <h4 className="edith4">Số lượng:&nbsp;<input min={0} max={100} defaultValue={1} type="number" /></h4>
                            </div>
                            <div className="form-inline">
                                <h4 className="edith4">Size:&nbsp;
                                    <select defaultValue={'DEFAULT'} className="default-select">
                                        <option value="DEFAULT" disabled>Chọn size</option>
                                        <option value="s">S</option>
                                        <option value="m">L</option>
                                        <option value="l">X</option>
                                    </select>
                                </h4>
                            </div>
                            <div className="form-inline">
                                <h4 className="edith4">Chọn màu:&nbsp;
                                    <button type="button" className="btn btn-default-xanh btn-circle" /> xanh
                                    <button type="button" className="btn btn-default-xam btn-circle" /> xám
                                    <button type="button" className="btn btn-default-do btn-circle" /> đỏ
                                    <button type="button" className="btn btn-default-vang btn-circle" /> vàng
                                    <button type="button" className="btn btn-default-luc btn-circle" /> lục

                                </h4>
                            </div>
                        </div>
                        <br />
                        <div className="form-inline click1">
                            <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                            <button className="btn btn-primary" type="submit"><i className="fa fa-shopping-cart" /> Mua ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;