import React, { Component } from 'react';

import callApi from '../../../../utils/apiCaller';

class List extends Component {
    constructor(props) {
        super(props)
        this.state={
            listProduct : [],
            start:0,
            end: 3,
            listArray: [],
            count:0
        }
    }

    async componentDidMount() {
        let listProduct = await callApi("getdata","GET",null)
        this.setState({
            listProduct: listProduct.data
        })
        const count = 0
        for (let i = 0; i < listProduct.length; i++) {
            count = count + 1 // eslint-disable-line
        }
        this.setState({count:count})
        this.onLoadMore()
    }

    showList = async(start,end) => {
        const showArray = this.state.listProduct.slice(start,end)
        this.setState({
            listArray: [...this.state.listArray,...showArray]
        })

    }
    onLoadMore = async() => {
        console.log(this.state.start);
        console.log(this.state.count);
        if (this.state.start<=this.state.count) {
            this.showList(this.state.start,this.state.end)
            this.setState({
                start: this.state.start + 3,
                end: this.state.end + 3
            })
        } else {
            document.getElementById("showList").style.display = "none"
        }
        
    }

    render() {
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
                    </article>
                </div>
            </div>
        );
    }
}

export default List;