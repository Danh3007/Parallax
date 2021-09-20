import React, { Component } from 'react';

import callApi from '../../../../utils/apiCaller';

class List extends Component {
    constructor(props) {
        super(props)
        this.state={
            listProduct : [],
            listArray: [],
            products: [],
            start:0,
            end: 3,
            count:0
        }
    }

    async componentDidMount() {
        let listProduct = await callApi("getdata","GET",null)
        this.setState({
            listProduct: listProduct.data
        })
        for (let i = 0; i < listProduct.data.length; i++) {
            this.setState({count: this.state.count + 1}) // eslint-disable-line
        }
        this.onLoadMore()
        let products = await callApi("product/getAll", "GET", null)
        this.setState({
            products: products.data
        })
    }

    showList = async(start,end) => {
        const showArray = this.state.listProduct.slice(start,end)
        this.setState({
            listArray: [...this.state.listArray,...showArray]
        })

    }
    onLoadMore = async() => {
        this.showList(this.state.start,this.state.end)
        this.setState({
            start: this.state.start + 3,
            end: this.state.end + 3
        })
        if (this.state.end>=this.state.count) {
            document.getElementById("showList").style.display = "none"
        }
    }

    onDetail = (e) => {
        localStorage.setItem('shop', e);
        this.props.history.push("/detail")
    }

    render() {
        console.log(this.state.products);
        let products = this.state.products.map(e=>{
            return  <div key={e._id} onClick={()=>this.onDetail(e._id)} className="list__product">
                        <div className="list__product--img">
                            <img className="list__img" src="./images/ao.jpg" alt="Hình sản phẩm" />
                        </div>
                        <div className="list__product--text">
                            <h3 className="list__text--title">{e.nameProduct}</h3>
                            <p className="list__text--price" style={{color: "#f6904a"}}>đ{e.priceProduct*e.saleProduct}</p>
                            <p className="list__text"><span style={{textDecoration: "line-through"}}>đ{e.priceProduct}</span>-{e.saleProduct}%</p>
                        </div>
                    </div>
        })
        let listProduct = this.state.listArray.map(e=>{
            return <li key={e._id} className="list__li main__span">{e.nameProduct}</li>
        })
        return (
            <div className="container">
                <div className="main list">
                    <aside className="list__aside">
                        <p className="main__label">Danh mục</p>
                        <hr style={{ width: "80%", margin: "10px auto" }} />
                        <ul>
                            {listProduct}
                            <button onClick={this.onLoadMore} id="showList" className="btn text-center main__span">Xem thêm</button>
                        </ul>
                    </aside>
                    <article className="list__article">
                        <p className="main__label text-center">Danh sách sản phẩm</p>
                        <hr style={{ width: "80%", margin: "10px auto" }} />
                        <div className="list__SX">
                            <label className="main__span">Sắp xếp theo:</label>
                            <select className="main__select">
                                <option>Giá</option>
                                <option>Giá từ thấp đến cao</option>
                                <option>Giá từ cao đến thấp</option>
                            </select>
                        </div>
                        <div className="list__SP">
                            {products}
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default List;