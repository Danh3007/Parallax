import React, { Component } from 'react';

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
            temp: 0,
            Fler: [],
        }
    }
    
    async componentDidMount() {
        const email = localStorage.getItem("email");
        const _id = localStorage.getItem("detail");
        let Product = await callApi("product/Product", "POST", {_id: _id});
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
        let seeShop = await callApi("shop/getId","POST", {_id: Product.data.idShop})
        this.setState({
            nameShop: seeShop.data.nameShop,
            idShop: seeShop.data._id,
        })
        // console.log(seeShop);
        let FL = await callApi("flProduct/get", "POST", {idProduct: this.state.idProduct, email: email})
        if (FL.data !== "no") {
            this.setState({
                heart: true
            })
        }
        // console.log(FL.data);
        let FLAll = await callApi("flProduct/getAll", "POST", {idProduct: this.state.idProduct})
        if (FLAll.data !== "no") {
            this.setState({
                Fler: FLAll.data
            })
        }
    }

    async componentDidUpdate(e) {
       if (e==="oke") {
        let FLAll = await callApi("flProduct/getAll", "POST", {idProduct: this.state.idProduct})
        if (FLAll.data !== "no") {
            this.setState({
                Fler: FLAll.data
            })
        }
       }
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
        const email = localStorage.getItem("email");
        if (email!==null) {
            voteStar.addEventListener("click", (e) => {
                messStar.innerHTML = ""
            }, true)
            content.addEventListener("focus", (e) => {
                mess.innerHTML = ""
            }, true)
            if (content.value.length === 0 && this.state.star===0) {
                mess.innerHTML = "Nh???p n???i dung"
                messStar.innerHTML = "Ch???n sao ????nh gi??"
            } else if (content.value.length !== 0 && this.state.star===0) {
                mess.innerHTML = ""
                messStar.innerHTML = "Ch???n sao ????nh gi??"
            } else if (content.value.length === 0 && this.state.star!==0) {
                mess.innerHTML = "Nh???p n???i dung"
                messStar.innerHTML = ""
            } else {
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
        } else {
            this.onNotity("????ng nh???p m???i th???c hi???n ???????c t??nh n??ng n??y!", "error", 3000)
        }
    }

    onChangeHeart = async(e) => {
        const onHeart = document.getElementById("onHeart")
        const offHeart = document.getElementById("offHeart")
        const email = localStorage.getItem("email");
        const nameUser = localStorage.getItem("nameUser");
        if (email!==null) {
            if (e.target.closest(".btn.main__span") === onHeart) {
                let Fl = await callApi("flProduct/create", "POST", {nameUser: nameUser, email: email, idProduct: this.state.idProduct}) // eslint-disable-line
                this.componentDidUpdate("oke")
                // console.log(Fl);
            }
            if (e.target.closest(".btn.main__span") === offHeart) {
                let Fl = await callApi("flProduct/remove", "POST", {email: email, idProduct: this.state.idProduct}) // eslint-disable-line
                this.componentDidUpdate("oke")
                // console.log(Fl);
            }
            this.setState({
                heart: !this.state.heart
            })
        } else {
            this.onNotity("????ng nh???p m???i th???c hi???n ???????c t??nh n??ng n??y!", "error", 3000)
        }
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
            mess.innerHTML = "Nh???p n???i dung"
            messStar.innerHTML = "Ch???n sao ????nh gi??"
        } else if (content.value.length !== 0 && this.state.star===0) {
            mess.innerHTML = ""
            messStar.innerHTML = "Ch???n sao ????nh gi??"
        } else if (content.value.length === 0 && this.state.star!==0) {
            mess.innerHTML = "Nh???p n???i dung"
            messStar.innerHTML = ""
        } else {
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

    navigationShop = (e) => {
        localStorage.setItem('shop', e);
        this.props.history.push("/shop")
    }

    countFl =(a,b) => {
        for (let i = 0; i < a.length; i++) {
            b=b+1
        }
        return b
    }
    addCart = async() => {
        const email = localStorage.getItem("email")
        if (email!==null) {
            let addCart = await callApi("cart/create", "POST", {
                idProduct: this.state.product._id,
                nameProduct: this.state.product.nameProduct,
                imageProduct: this.state.product.imgProduct1,
                priceProduct: this.state.product.priceProduct-(this.state.product.priceProduct*this.state.product.saleProduct/100),
                quantity: 1,
                email: email
            })
            // console.log(addCart);
            this.onNotity(addCart.data.mess, addCart.data.type, addCart.data.duration)
        } else {
            this.onNotity("????ng nh???p m???i th???c hi???n ???????c t??nh n??ng n??y!", "error", 3000)
        }
        
    }

    // th??ng b??o
    onNotity = (messNotity='', type="success" ,duration=3000) => {
        const main = document.getElementById("toast")
        if (main) {
            const toast = document.createElement("div")

            // auto Remove
            const autoRemoveId = setTimeout(()=>{
                main.removeChild(toast)
            }, duration + 1000)

            // click Remove
            toast.onclick = (e) => {
                if (e.target.closest(".toast__close")) {
                    main.removeChild(toast)
                    clearTimeout(autoRemoveId)
                }
            }

            const icons = {
                success:"fa-check-circle",
                error:"fa-exclamation-triangle"
            }
            const icon = icons[type]
            const delay = (duration / 1000).toFixed(2)
            toast.classList.add("toast", `toast--${type}`)
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
            toast.innerHTML = `
                <div class="toast__icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="toast__body">
                    <p>${messNotity}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
                `;
            main.appendChild(toast)
        }
    }

    format2 = (n) => {
        const numberFormat = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        });
        return numberFormat.format(n)
      }

    render() {
        // console.log(this.state.product);
        const fl = this.countFl(this.state.Fler,0)
        const reviews = this.state.listReview.map((review)=>{ // eslint-disable-line
            if (this.state.temp === 0) {
                return  <div key={review._id} className="content">
                            <label className="main__label">Ng?????i ????ng: {review.nameUser} <span>{review.star}<i className="fas fa-star"></i></span></label>
                            <p className="main__span">{review.content}</p>
                            <p className="main__span">Ng??y ????ng: {review.createdAt.slice(0,10)}.</p>
                        </div>
            } else {
                if (review.star === this.state.temp) {
                    return  <div key={review._id} className="content">
                                <label className="main__label">Ng?????i ????ng: {review.nameUser} <span>{review.star}<i className="fas fa-star"></i></span></label>
                                <p className="main__span">{review.content}</p>
                                <p className="main__span">Ng??y ????ng: {review.createdAt.slice(0,10)}.</p>
                            </div>
                }
            }
        })
        let total = this.state.product.priceProduct - (this.state.product.priceProduct * this.state.product.saleProduct / 100)
        return (
            <div className="container">
                <div id="toast"></div>
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
                            <h2 className="main__label">T??N S???N PH???M: {this.state.product.nameProduct}</h2>
                            <div className="form-inline">
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                                <a href="/"><i className="fa fa-star" style={{ color: "#8a8ae4" }} /></a>
                            </div>
                            <hr />
                            <h4 className="main__span">Gi?? ti???n l??c ?????u: <span style={{textDecoration: "line-through"}}>{this.format2(this.state.product.priceProduct)}</span></h4>
                            <h4 className="main__span">Gi???m gi?? {this.state.product.saleProduct}%</h4>
                            <h4 style={{color: "red"}} className="main__span">Gi?? ti???n hi???n t???i: {this.format2(total)}</h4>
                            <h4 className="main__span">C??n l???i: {this.state.product.quantityProduct} s???n ph???m</h4>
                            <br />
                            
                            {this.state.product.quantityProduct !== 0 ? (
                                <button onClick={this.addCart} className="btn main__btn" type="submit"><i className="fa fa-shopping-cart" /> Th??m v??o gi??? h??ng</button>
                            ):(
                                <button className="btn main__btn btn__disable" type="submit"><i className="fa fa-shopping-cart" /> Th??m v??o gi??? h??ng</button>
                            )}
                            
                            {this.state.heart === false ? (
                                <button id="onHeart" onClick={this.onChangeHeart} className="btn main__span">
                                    <i className="far fa-heart"></i>
                                    <span> {fl} y??u th??ch</span>
                                </button>
                            ):(
                                <button id="offHeart" onClick={this.onChangeHeart} className="btn main__span">
                                    <i style={{color: "red"}} className="fas fa-heart"></i>
                                    <span> {fl} y??u th??ch</span>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>C???a h??ng c???a s???n ph???m</h3>
                        {/* <Link style={{color: "black"}} to="/shop" query={{idShop: 1}} className="main__span">{this.state.nameShop}</Link> */}
                        <button onClick={() => this.navigationShop(this.state.idShop)} className="btn main__span">{this.state.nameShop}</button>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>Gi???i thi???u s???n ph???m</h3>
                        <p className="main__span">{this.state.product.???ntroduceProduct}</p>
                    </div>
                    <div className="description">
                        <h3 className="main__label" style={{textDecoration: "underline"}}>????nh gi??</h3>
                        <div className="vote">
                            <h3 className="main__span">????nh gi?? c???a b???n:</h3>
                            {this.state.me === "no" ? (
                                <form id="form-vote" className="form__vote">
                                    <div className="form-group">
                                        <label className="main__label">Ch???n sao ????nh gi??</label>
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
                                        <label className="main__label">Vi???t b??nh lu???n</label>
                                        <textarea id="content" className="main__input form-control"></textarea>
                                        <span className="form-message"></span>
                                    </div>
                                    <button onClick={this.upPage} className="btn main__btn">????ng</button>
                                </form>
                            ):(
                                <div>
                                    <div id="vote-review" className="form__vote">
                                        <label className="main__label">B???n ???? b??nh ch???n <span>{this.state.me.star}<i className="btn__vote fas fa-star"></i></span></label>
                                        <p className="main__span">{this.state.me.content}</p>
                                        <button onClick={this.onHandleVote} className="btn main__span main__btn2">Ch???nh s???a</button>
                                    </div>

                                    {/* form */}
                                    <form style={{display: "none"}} id="vote-update" className="form__vote">
                                    <div className="form-group">
                                        <label className="main__label">Ch???n sao ????nh gi??</label>
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
                                        <label className="main__label">Vi???t b??nh lu???n</label>
                                        <textarea id="content" className="main__input form-control"></textarea>
                                        <span className="form-message"></span>
                                    </div>
                                    <button onClick={this.update} className="btn main__btn">????ng</button>
                                </form>
                                </div>
                                
                            )}
                        </div>
                        <div className="evaluate">
                            <div className="reivews">
                                <label className="main__label">????nh gi?? c???a ng?????i d??ng:</label>
                                <div onClick={this.filterByStar} className="review">
                                    <button id="seeReview5" className="btn main__btn">5 <i className="fas fa-star"></i></button>
                                    <button id="seeReview4" className="btn main__btn">4 <i className="fas fa-star"></i></button>
                                    <button id="seeReview3" className="btn main__btn">3 <i className="fas fa-star"></i></button>
                                    <button id="seeReview2" className="btn main__btn">2 <i className="fas fa-star"></i></button>
                                    <button id="seeReview1" className="btn main__btn">1 <i className="fas fa-star"></i></button>
                                    <button id="seeReview0" className="btn main__btn">T???t c???</button>
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