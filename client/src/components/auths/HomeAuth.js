import React, { Component } from 'react';

import HeaderAuth from './layouts/HeaderAuth';
import FooterAuth from './layouts/FooterAuth';

class Home extends Component {
    constructor(props) {
        super(props)
        this.onChaneAuth=this.onChaneAuth.bind(this)
        this.onSubmitAuth=this.onSubmitAuth.bind(this)
    }
    onChaneAuth = (e) => {
        document.querySelector('.Auth').classList.toggle('s--signup');
    }
    onSubmitAuth = (e) => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
        if (e.target.innerHTML === "Đăng Nhập") {
            let formLogin = document.querySelector('#form-login')
            let email = formLogin.querySelector("#email")
            let messageEmail = email.parentElement.querySelector(".form-message")
            let password = formLogin.querySelector("#password")
            let messagePassword = password.parentElement.querySelector(".form-message")
            if (email.value.length === 0) {
                email.classList.add("invalid")
                messageEmail.innerHTML="Vui lòng nhập trường này"
                e.preventDefault()
            } else {
                if (regex.test(email.value) === false) {
                    email.classList.add("invalid")
                    messageEmail.innerHTML="Trường này phải là Email"
                    e.preventDefault()
                } else {
                    email.classList.add("invalid")
                    messageEmail.innerHTML=""
                }
            }
            if (password.value.length === 0) {
                password.classList.add("invalid")
                messagePassword.innerHTML="Vui lòng nhập trường này"
                e.preventDefault()
            } else {
                if (password.value.length < 6) {
                    password.classList.add("invalid")
                    messagePassword.innerHTML="Mật khẩu tối thiểu phải bằng 6 kí tự"
                    e.preventDefault()
                } else {
                    password.classList.remove("invalid")
                    messagePassword.innerHTML=""
                }
            }
        }
        if (e.target.innerHTML === "Đăng Kí") {
            let formRegister = document.querySelector("#form-register")
            let txtName = formRegister.querySelector("#txtName")
            let messagetxtName = txtName.parentElement.querySelector(".form-message")
            let email = formRegister.querySelector("#email")
            let messageEmail = email.parentElement.querySelector(".form-message")
            let password = formRegister.querySelector("#password")
            let messagePassword = password.parentElement.querySelector(".form-message")
            if (txtName.value.length === 0) {
                txtName.classList.add("invalid")
                messagetxtName.innerHTML="Vui lòng nhập trường này"
                e.preventDefault()
            } else {
                txtName.classList.remove("invalid")
                messagetxtName.innerHTML=""
            }
            if (email.value.length === 0) {
                email.classList.add("invalid")
                messageEmail.innerHTML="Vui lòng nhập trường này"
                e.preventDefault()
            } else {
                if (regex.test(email.value) === false) {
                    email.classList.add("invalid")
                    messageEmail.innerHTML="Trường này phải là Email"
                    e.preventDefault()
                } else {
                    email.classList.remove("invalid")
                    messageEmail.innerHTML=""
                }
            }
            if (password.value.length === 0) {
                password.classList.add("invalid")
                messagePassword.innerHTML="Vui lòng nhập trường này"
                e.preventDefault()
            } else {
                if (password.value.length < 6) {
                    password.classList.add("invalid")
                    messagePassword.innerHTML="Mật khẩu tối thiểu phải bằng 6 kí tự"
                    e.preventDefault()
                } else {
                    password.classList.remove("invalid")
                    messagePassword.innerHTML=""
                }
            }
            
        }
    }
    render() {
        return (
            <div>
                <HeaderAuth />
                <div className="Auth">
                    <div className="formAuth sign-in">
                        <h2>Chào Mừng Quay Lại,</h2>
                        <form action="" method="POST" id="form-login">
                            <div className="form-group">
                                <label>Nhập Email</label>
                                <input id="email" type="email" className="form-control" />
                                <span className="form-message"></span>
                            </div>
                            <div className="form-group">
                                <label>Nhập Mật Khẩu</label>
                                <input id="password" type="password" className="form-control" />
                                <span className="form-message"></span>
                            </div>
                            <p className="forgot-pass">Quên Mật Khẩu?</p>
                            <button onClick={this.onSubmitAuth} type="submit" className="btn btn-login">Đăng Nhập</button>
                            <button type="button" className="btn btn-fb">Kết nối với Facebook</button>
                        </form>
                    </div>
                    <div className="sub-Auth">
                        <div className="effect">
                            <div className="effect__text m--up">
                                <h2>Tạo tài khoản ?</h2>
                                <p>Đăng kí để tham gia và trải nghiệm nhiều tính năng mới</p>
                            </div>
                            <div className="effect__text m--in">
                                <h2>Đã có tài khoản</h2>
                                <p>Nếu bạn đã có tài khoản, chỉ cần đăng nhậP. Chúng tôi rất nhớ bạn !</p>
                            </div>
                            <div onClick={this.onChaneAuth} className="effect__btn">
                                <span className="m--up">Đăng Kí</span>
                                <span className="m--in">Đăng Nhập</span>
                            </div>
                        </div>
                        <div className="formAuth sign-up">
                            <h2>Trở Thành Một Thành Viên Của Chúng Tôi,</h2>
                            <form action="" method="POST" id="form-register">
                                <div className="form-group">
                                    <label>Nhập Tên</label>
                                    <input id="txtName" type="text" className="form-control" />
                                    <span className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Nhập Email</label>
                                    <input id="email" type="email" className="form-control" />
                                    <span className="form-message"></span>
                                </div>
                                <div className="form-group">
                                    <label>Nhập Mật Khẩu</label>
                                    <input id="password" type="password" className="form-control" />
                                    <span className="form-message"></span>
                                </div>
                                <button onClick={this.onSubmitAuth} type="submit" className="btn btn-register">Đăng Kí</button>
                            </form>
                        </div>
                    </div>
                </div>
                <FooterAuth />
            </div>
        );
    }
}

export default Home;