import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

import callApi from '../../../utils/apiCaller';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            me: [],
            listReview: [],
            star: 0,
            post: "",
            heart: false,
            temp: 0
        }
    }
    
    async componentDidMount() {
        const email = localStorage.getItem("email");
        let Product = await callApi("product/Product", "POST", {_id: "61428ba6ac4e3f2a741930b9"});
        // console.log(Product);
        this.setState({
            product: Product.data,
            idProduct: Product.data._id
        });
        let postReview = await callApi("review/get", "POST", {idProduct: Product.data._id})
        if (postReview !== "no") {
            this.setState({
                listReview: postReview.data
            })
        }
        // console.log(postReview.data);
        let myReview = await callApi("review/me", "POST", {idProduct: Product.data._id, email:email})
        this.setState({
            me: myReview.data
        })
        // console.log(myReview.data);
        let seeShop = await callApi("shop/seeshop","POST", {id: Product.data.idShop})
        this.setState({
            nameShop: seeShop.data.nameShop,
            idShop: seeShop.data._id,
        })
        // console.log(seeShop);
    }

    onVote = (e) => {
        const star1 = document.getElementById("star1")
        const star2 = document.getElementById("star2")
        const star3 = document.getElementById("star3")
        const star4 = document.getElementById("star4")
        const star5 = document.getElementById("star5")
        if (e.target === star1) {
            star1.classList.remove("far")
            star1.classList.add("fas")
            star2.classList.add("far")
            star2.classList.remove("fas")
            star3.classList.add("far")
            star3.classList.remove("fas")
            star4.classList.add("far")
            star4.classList.remove("fas")
            star5.classList.add("far")
            star5.classList.remove("fas")
            this.setState({
                star: 1
            })
            
        }
        if (e.target === star2) {
            star1.classList.remove("far")
            star1.classList.add("fas")
            star2.classList.remove("far")
            star2.classList.add("fas")
            star3.classList.add("far")
            star3.classList.remove("fas")
            star4.classList.add("far")
            star4.classList.remove("fas")
            star5.classList.add("far")
            star5.classList.remove("fas")
            this.setState({
                star: 2
            })
        }
        if (e.target === star3) {
            star1.classList.remove("far")
            star1.classList.add("fas")
            star2.classList.remove("far")
            star2.classList.add("fas")
            star3.classList.remove("far")
            star3.classList.add("fas")
            star4.classList.add("far")
            star4.classList.remove("fas")
            star5.classList.add("far")
            star5.classList.remove("fas")
            this.setState({
                star: 3
            })
        }
        if (e.target === star4) {
            star1.classList.remove("far")
            star1.classList.add("fas")
            star2.classList.remove("far")
            star2.classList.add("fas")
            star3.classList.remove("far")
            star3.classList.add("fas")
            star4.classList.remove("far")
            star4.classList.add("fas")
            star5.classList.add("far")
            star5.classList.remove("fas")
            this.setState({
                star: 4
            })
        }
        if (e.target === star5) {
            star1.classList.remove("far")
            star1.classList.add("fas")
            star2.classList.remove("far")
            star2.classList.add("fas")
            star3.classList.remove("far")
            star3.classList.add("fas")
            star4.classList.remove("far")
            star4.classList.add("fas")
            star5.classList.remove("far")
            star5.classList.add("fas")
            this.setState({
                star: 5
            })
        }
    }

    upPage = async(e) => {
        e.preventDefault()
        const form = document.getElementById("form-vote")
        const voteStar = document.getElementById("voteStar")
        const content = form.querySelector("#content")
        const messStar = voteStar.parentElement.querySelector(".form-message")
        const mess = content.parentElement.querySelector(".form-message")
        voteStar.addEventListener("click", (e) => {
            messStar.innerHTML = ""
        }, true)
        content.addEventListener("focus", (e) => {
            mess.innerHTML = ""
        }, true)
        if (content.value.length === 0 && this.state.star===0) {
            mess.innerHTML = "Nhập nội dung"
            messStar.innerHTML = "Chọn sao đánh giá"
        } else if (content.value.length !== 0 && this.state.star===0) {
            mess.innerHTML = ""
            messStar.innerHTML = "Chọn sao đánh giá"
        } else if (content.value.length === 0 && this.state.star!==0) {
            mess.innerHTML = "Nhập nội dung"
            messStar.innerHTML = ""
        } else {
            const email = localStorage.getItem("email");
            const nameUser = localStorage.getItem("nameUser");
            const createPost = await callApi("review/create", "POST", {
                nameUser: nameUser,
                email: email,
                idProduct: this.state.idProduct,
                star: this.state.star,
                content: content.value
            })
            console.log(createPost);
            window.location.reload();
        }
    }

    onChangeHeart = () => {
        this.setState({
            heart: !this.state.heart
        })
    }

    onHandleVote = () => {
        document.getElementById("vote-review").style.display = "none"
        document.getElementById("vote-update").style.display = "block"
    }
    update = async(e) => {
        e.preventDefault()
        const form = document.getElementById("vote-update")
        const voteStar = document.getElementById("voteStar")
        const content = form.querySelector("#content")
        const messStar = voteStar.parentElement.querySelector(".form-message")
        const mess = content.parentElement.querySelector(".form-message")
        voteStar.addEventListener("click", (e) => {
            messStar.innerHTML = ""
        }, true)
        content.addEventListener("focus", (e) => {
            mess.innerHTML = ""
        }, true)
        if (content.value.length === 0 && this.state.star===0) {
            mess.innerHTML = "Nhập nội dung"
            messStar.innerHTML = "Chọn sao đánh giá"
        } else if (content.value.length !== 0 && this.state.star===0) {
            mess.innerHTML = ""
            messStar.innerHTML = "Chọn sao đánh giá"
        } else if (content.value.length === 0 && this.state.star!==0) {
            mess.innerHTML = "Nhập nội dung"
            messStar.innerHTML = ""
        } else {
            const email = localStorage.getItem("email");
            const createPost = await callApi("review/update", "POST", {
                id: this.state.me._id,
                star: this.state.star,
                content: content.value
            })
            console.log(createPost);
            window.location.reload();
        }
    }

    filterByStar = (e) => {
        const seeReview5 = document.getElementById("seeReview5")
        const seeReview4 = document.getElementById("seeReview4")
        const seeReview3 = document.getElementById("seeReview3")
        const seeReview2 = document.getElementById("seeReview2")
        const seeReview1 = document.getElementById("seeReview1")
        const seeReview0 = document.getElementById("seeReview0")
        if (e.target.closest("#seeReview5") === seeReview5) {
            this.setState({
                temp: 5
            })
        }
        if (e.target.closest("#seeReview4") === seeReview4) {
            this.setState({
                temp: 4
            })
        }
        if (e.target.closest("#seeReview3") === seeReview3) {
            this.setState({
                temp: 3
            })
        }
        if (e.target.closest("#seeReview2") === seeReview2) {
            this.setState({
                temp: 2
            })
        }
        if (e.target.closest("#seeReview1") === seeReview1) {
            this.setState({
                temp: 1
            })
        }
        if (e.target.closest("#seeReview0") === seeReview0) {
            this.setState({
                temp: 0
            })
        }
    }

    render() {
        const reviews = this.state.listReview.map(review=>{
            if (this.state.temp === 0) {
                return  <div key={review._id} className="content">
                            <label className="main__label">Người đăng: {review.nameUser} <span>{review.star}<i className="fas fa-star"></i></span></label>
                            <p className="main__span">{review.content}</p>
                            <p className="main__span">Ngày đăng: {review.createdAt.slice(0,10)}.</p>
                        </div>
            } else {
                if (review.star === this.state.temp) {
                    return  <div key={review._id} className="content">
                                <label className="main__label">Người đăng: {review.nameUser} <span>{review.star}<i className="fas fa-star"></i></span></label>
                                <p className="main__span">{review.content}</p>
                                <p className="main__span">Ngày đăng: {review.createdAt.slice(0,10)}.</p>
                            </div>
                }
            }
        })
        let total = this.state.product.priceProduct - (this.state.product.priceProduct * this.state.product.saleProduct / 100)
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
                            <h4 className="main__span">Giá tiền lúc đầu: <span style={{textDecoration: "line-through"}}>{this.state.product.priceProduct} VNĐ</span></h4>
                            <h4 className="main__span">Giảm giá {this.state.product.saleProduct}%</h4>
                            <h4 style={{color: "red"}} className="main__span">Giá tiền hiện tại: {total} VND</h4>
                            <h4 className="main__span">Còn lại: {this.state.product.quantityProduct} sản phẩm</h4>
                            <br />

                            <button className="btn main__btn" type="submit"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                            
                            {this.state.heart === false ? (
                                <button onClick={this.onChangeHeart} className="btn main__span">
                                    <i id="heart" className="far fa-heart"></i>
                                    <span> yêu thích</span>
                                </button>
                            ):(
                                <button onClick={this.onChangeHeart} className="btn main__span">
                                    <i style={{color: "red"}} className="fas fa-heart"></i>
                                    <span> yêu thích</span>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>Cửa hàng của sản phẩm</h3>
                        <Link style={{color: "black"}} to="/shop" className="main__span">{this.state.nameShop}</Link>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>Giới thiệu sản phẩm</h3>
                        <p className="main__span">{this.state.product.ỉntroduceProduct}</p>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>Đánh giá</h3>
                        <div className="vote">
                            <h3 className="main__span">Đánh giá của bạn:</h3>
                            {this.state.me === "no" ? (
                                <form id="form-vote" className="form__vote">
                                    <div className="form-group">
                                        <label className="main__label">Chọn sao đánh giá</label>
                                        <div id="voteStar" onClick={this.onVote}>
                                            <i id="star1" className="btn btn__vote far fa-star"></i>
                                            <i id="star2" className="btn btn__vote far fa-star"></i>
                                            <i id="star3" className="btn btn__vote far fa-star"></i>
                                            <i id="star4" className="btn btn__vote far fa-star"></i>
                                            <i id="star5" className="btn btn__vote far fa-star"></i>
                                        </div>
                                        <span className="form-message"></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="main__label">Viết bình luận</label>
                                        <textarea id="content" className="main__input form-control"></textarea>
                                        <span className="form-message"></span>
                                    </div>
                                    <button onClick={this.upPage} className="btn main__btn">Đăng</button>
                                </form>
                            ):(
                                <div>
                                    <div id="vote-review" className="form__vote">
                                        <label className="main__label">Bạn đã bình chọn <span>{this.state.me.star}<i className="btn__vote fas fa-star"></i></span></label>
                                        <p className="main__span">{this.state.me.content}</p>
                                        <button onClick={this.onHandleVote} className="btn main__span main__btn2">Chỉnh sửa</button>
                                    </div>

                                    {/* form */}
                                    <form style={{display: "none"}} id="vote-update" className="form__vote">
                                    <div className="form-group">
                                        <label className="main__label">Chọn sao đánh giá</label>
                                        <div id="voteStar" onClick={this.onVote}>
                                            <i id="star1" className="btn btn__vote far fa-star"></i>
                                            <i id="star2" className="btn btn__vote far fa-star"></i>
                                            <i id="star3" className="btn btn__vote far fa-star"></i>
                                            <i id="star4" className="btn btn__vote far fa-star"></i>
                                            <i id="star5" className="btn btn__vote far fa-star"></i>
                                        </div>
                                        <span className="form-message"></span>
                                    </div>
                                    <div className="form-group">
                                        <label className="main__label">Viết bình luận</label>
                                        <textarea id="content" className="main__input form-control"></textarea>
                                        <span className="form-message"></span>
                                    </div>
                                    <button onClick={this.update} className="btn main__btn">Đăng</button>
                                </form>
                                </div>
                                
                            )}
                        </div>
                        <div className="evaluate">
                            <div className="reivews">
                                <label className="main__label">Đánh giá của người dùng:</label>
                                <div onClick={this.filterByStar} className="review">
                                    <button id="seeReview5" className="btn main__btn">5 <i className="fas fa-star"></i></button>
                                    <button id="seeReview4" className="btn main__btn">4 <i className="fas fa-star"></i></button>
                                    <button id="seeReview3" className="btn main__btn">3 <i className="fas fa-star"></i></button>
                                    <button id="seeReview2" className="btn main__btn">2 <i className="fas fa-star"></i></button>
                                    <button id="seeReview1" className="btn main__btn">1 <i className="fas fa-star"></i></button>
                                    <button id="seeReview0" className="btn main__btn">Tất cả</button>
                                </div>
                            </div>
                            {reviews}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;