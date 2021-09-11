import React, { Component } from 'react';

import callApi from '../../../../utils/apiCaller';

class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
          introduce: "",
          address: "",
          follower: [],
          prestige: 0,
          dayCreate: ""
        };
      }
    
      async componentDidMount() {
        const email = localStorage.getItem("email");
        let myShop = await callApi("shop/getShop", "POST", { email: email });
        this.setState({
          introduce: myShop.data.introduce,
          address: myShop.data.address,
          dayCreate: myShop.data.updatedAt.slice(0,10)
        });
      }
    render() {
        return (
            <div style={{display: "flex"}}>
                <article className="introduce__left">
                    <h3 className="main__label">Mô tả</h3>
                    <p className="main__span">{this.state.introduce}</p>
                    <h3 className="main__label">Địa Chỉ</h3>
                    <p className="main__span">{this.state.address}</p>
                </article>
                <aside className="introduce__right">
                    <h3 className="main__label">Thống kê</h3>
                    <p className="main__span">Đã tham gia vào ngày: {this.state.dayCreate}</p>
                    <p className="main__span">Số lượng người theo dõi: 0</p>
                    <p className="main__span">Độ uy tín: {this.state.prestige}</p>
                </aside>
            </div>
        );
    }
}

export default Introduce;