import React, { Component } from "react";
import Banner from "./Banner";

import callApi from "../../../../utils/apiCaller";

class TrangChu extends Component {
  constructor(props) {
    super(props)
    this.state={
      products : []
    }
  }

  componentDidMount() {
    callApi("getdata","GET",null).then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    let elements = this.state.products.map((product) => {
      return  <li key={product._id}>
                <div className="card ">
                  <div className="card__img">
                    <img className="img__product" src={"./images/"+product.imgProduct} alt="hình sản phẩm" />
                  </div>
                  <div className="card__text">
                    <h6 className="text__product">{product.nameProduct}</h6>
                  </div>
                </div>
              </li>
    })
    return (
      <main className="container">
        <Banner />
        <div>
          <ul className="danhmuc">
            {elements}
          </ul>
        </div>
      </main>
    );
  }
}

export default TrangChu;
