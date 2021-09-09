import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line

class Shopcart extends Component {
    render() {
        return (
          <div className="container" style={{height: "500px"}}> 
            <table id="cart" className="table table-hover table-condensed"> 
              <thead> 
                <tr> 
                  <th style={{width: '50%'}}>Tên sản phẩm</th> 
                  <th style={{width: '10%'}}>Giá</th> 
                  <th style={{width: '8%'}}>Số lượng</th> 
                  <th style={{width: '22%'}} className="text-center">Thành tiền</th> 
                  <th style={{width: '10%'}}> </th> 
                </tr> 
              </thead> 
              <tbody><tr> 
                  <td data-th="Product"> 
                    <div className="row"> 
                      <div className="col-sm-2 hidden-xs"><img src={"./images/list1.png"} style={{ width: '50px', height: '50px' }} alt="logo-shop"  className="img-responsive" width={100} />
                      </div> 
                      <div className="col-sm-10"> 
                        <h4 className="nomargin">Sản phẩm 1</h4> 
                        <p>Mô tả của sản phẩm 1</p> 
                      </div> 
                    </div> 
                  </td> 
                  <td data-th="Price">200.000 đ</td> 
                  <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" />
                  </td> 
                  <td data-th="Subtotal" className="text-center">200.000 đ</td> 
                  <td className="actions" data-th>
                    <button className="btn btn-info btn-sm"><i className="fa fa-edit" />
                    </button> 
                    <button className="btn btn-danger btn-sm"><i className="far fa-trash-alt" />
                    </button>
                  </td> 
                </tr> 
                <tr> 
                  <td data-th="Product"> 
                    <div className="row"> 
                      <div className="col-sm-2 hidden-xs"><img src={"./images/list2.png"} style={{ width: '50px', height: '50px' }} alt="logo-shop"  className="img-responsive" width={100} />
                      </div> 
                      <div className="col-sm-10"> 
                        <h4 className="nomargin">Sản phẩm 2</h4> 
                        <p>Mô tả của sản phẩm 2</p> 
                      </div> 
                    </div> 
                  </td> 
                  <td data-th="Price">300.000 đ</td> 
                  <td data-th="Quantity"><input className="form-control text-center" defaultValue={1} type="number" />
                  </td> 
                  <td data-th="Subtotal" className="text-center">300.000 đ</td> 
                  <td className="actions" data-th>
                    <button className="btn btn-info btn-sm"><i className="fa fa-edit" />
                    </button> 
                    
                    <button className="btn btn-danger btn-sm"><i className="far fa-trash-alt" />
                    </button>
                 
                  </td> 
                </tr> 
              </tbody><tfoot> 
                <tr className="visible-xs"> 
                  <td className="text-center"><strong>Tổng 200.000 đ</strong>
                  </td> 
                </tr> 
                <tr> 
                  <td><Link className="nav-link" to="/"><button className="btn btn-warning"><i className="fa fa-angle-left" /> Tiếp tục mua hàng</button></Link>
                  </td> 
                  <td colSpan={2} className="hidden-xs"> </td> 
                  <td className="hidden-xs text-center"><strong>Tổng tiền 500.000 đ</strong>
                  </td> 
                  <td><button className="btn btn-success btn-block">Thanh toán <i className="fa fa-angle-right" /></button>
                  </td> 
                </tr> 
              </tfoot> 
            </table>
          </div>
        );
}
};
export default Shopcart;
