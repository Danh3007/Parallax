import React, { Component } from 'react';

import callApi from "./../../../../utils/apiCaller"

class Me extends Component {

    constructor(props) {
        super(props)
        this.state={
          nameUser: "",
          email: "",
          telephone: 0,
          gender: 0
        }
    }

    async componentDidMount() {
        const nameUser = await localStorage.getItem('nameUser');
        const email = await localStorage.getItem('email');
        const getInformation = await callApi("info/getinfor","POST",{email:email})
        this.setState({
            nameUser: nameUser,
            email: email,
            telephone: getInformation.data.telephone,
            gender: getInformation.data.gender,
        })
        console.log(getInformation);
    }

    onSdt = async(e) => {
        const onSdt = document.getElementById("sdt")
        const offSdt = e.target
        offSdt.style.display= "none"
        onSdt.style.display = "block"
    }

    onEmail = async(e) => {
        alert("Tính năng đang bảo trì!!!")
    }
    onUpdateInfor = async(e) => {
        e.preventDefault()
        
    }

    render() {
        const telephone = this.state.telephone
        return (
            <div>
                <h3 className="myHome__caption">Hồ sơ của tôi</h3>
                <p className="myHome__caption--desc">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <hr style={{width: "80%", margin: "10px auto"}} />
                <form>
                    <div className="form-group">
                        <label className="myHome__me--label">Tên đăng nhập:</label>
                        <input className="myHome__me--input form-control" placeholder={this.state.nameUser} type="text" id="nameUser" />
                    </div>
                    <div className="form-group">
                        <label className="myHome__me--label">Email:</label>
                        <span className="myHome__me--span"> ***********itc@gmail.com </span><span className="myHome__me--spanBtn" onClick={this.onEmail}>Thay đổi</span>
                    </div>
                    <div className="form-group">
                        <label className="myHome__me--label">Số điện thoại:</label>
                        {telephone !== undefined ? (<span className="myHome__me--label"> 0{telephone}</span>) :
                            (<span style={{marginLeft: "5px"}} className="myHome__me--spanBtn" onClick={this.onSdt}>Thêm</span>)
                        }
                        <input style={{display: "none"}} id="sdt" className="myHome__me--input form-control" type="number" />
                    </div>
                    <div className="form-group">
                        <label className="myHome__me--label">Giới tính:</label>
                        <div>
                            <input className="myHome__me--gender" checked="true" name="gender" type="radio" defaultValue="1" /><span style={{margin: "0px 5px", fontSize:"18px"}}>Nam</span>
                            <input className="myHome__me--gender" name="gender" type="radio" defaultValue="2" /><span style={{margin: "0px 5px", fontSize:"18px"}}>Nữ</span>
                            <input className="myHome__me--gender" name="gender" type="radio" defaultValue="0" /><span style={{margin: "0px 5px", fontSize:"18px"}}>Khác</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="myHome__me--label">Ngày sinh:</label>
                        <input className="myHome__me--select" type="date" />
                    </div>
                    <button className="btn btn__me" onClick={this.onUpdateInfor}>Lưu</button>
                </form>
            </div>
        );
    }
}

export default Me;