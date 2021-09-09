import React, { Component } from 'react';

import callApi from '../../../../utils/apiCaller';

class Address extends Component {
    constructor(props) {
        super(props)
        this.state={
          address : []
        }
      }

    async componentDidMount() {
        const email = localStorage.getItem("email")
        let getInfor = await callApi("info/getinfor","POST",{email})
        for (let i = 0; i < getInfor.data.address.length; i++) {
            this.setState({
                address: [...this.state.address, getInfor.data.address[i]]
            })
        }
    }

    onSetAddress = (e) => {
        const onAdd = document.getElementById("onSetAddress")
        const setAddress = document.getElementById("setAddress")
        onAdd.style.display = "none"
        setAddress.style.display = "block"
    }
    onSaveAddress = async() => {
        const address = document.getElementById("address")
        const messNotity = document.querySelector(".form-message")
        address.addEventListener("focus", (e) => {
            address.classList.remove("invalid")
            messNotity.innerHTML=""
        }, true)
        if (address.value.length === 0) {
            address.classList.add("invalid")
            messNotity.innerHTML = "Mời nhập địa chỉ"
        } else {
            const email = localStorage.getItem("email")
            const addAddress = await callApi("info/upaddress","POST",{email: email, address: address.value}) // eslint-disable-line
            window.location.reload();
        }
    }

    removeAddress = async(e) => {
        let element = e.target
        const email = localStorage.getItem("email")
        const removeAddress = await callApi("info/removeaddress","POST",{email: email, element: element.title}) // eslint-disable-line
        window.location.reload();
    }

    // thông báo
    render() {
        let elements = this.state.address.map(e => {
            return  <div key={e} className="table__address">
                        <div className="table__address--info">
                            <p>{e}</p>
                        </div>
                        <div className="table__address--btn">
                            <i onClick={this.removeAddress} title={e} style={{color: "red"}} className="table__address--icon fas fa-trash-alt"></i>
                        </div>
                    </div>
        })
        return (
            <div>
                <h3 className="myHome__caption">Địa chỉ của tôi</h3>
                <button id="onSetAddress" onClick={this.onSetAddress} className="btn btn__me">+ Thêm địa chỉ mới</button>
                <div id="setAddress">
                    <input id="address" className="myHome__me--input form-control" type="text" />
                    <p className="form-message"></p>
                    <button onClick={this.onSaveAddress} className="btn btn__me">Lưu</button>
                </div>
                <hr/>
                {elements}
            </div>
        );
    }
}

export default Address;