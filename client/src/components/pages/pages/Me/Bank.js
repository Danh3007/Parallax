import React, { Component } from 'react';

class bank extends Component {
    onBank = () => {
        alert("Tính năng đang bảo trì")
    }
    render() {
        return (
            <div>
                <h3 className="myHome__caption">Tài khoảng ngân hàng của tôi</h3>
                <button onClick={this.onBank} className="btn btn__me">+ Thêm tài khoảng ngân hàng</button>
                <hr/>
            </div>
        );
    }
}

export default bank;