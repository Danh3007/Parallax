import React, { Component } from 'react';

class Me extends Component {
    render() {
        return (
            <div>
                <h3 className="h3bank_change_add_me_home">Hồ sơ của tôi</h3>
                <p className="me">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                <hr></hr>
                <div>
                    <label htmlFor="tendn">Tên đăng nhập:</label>
                </div>
                <div>
                    <h3>CHIENTHUHAI</h3>
                </div>
                <div>
                    <label htmlFor="ten">Tên:</label>
                </div>
                <div>
                    <input className="input1" type="text" name="user" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                </div>
                <div>
                    <input className="input1" type="email" name="email" />
                </div>

                <div>
                    <label htmlFor="email">Số điện thoại:</label>
                </div>
                <div>
                    <input className="input1" maxLength="11/" name="dienThoai" type="text" />
                </div>
                <label htmlFor="gt">Giới tính:</label>
                <div className="form-inline">
                    <label><input name="thanhToan" type="radio" defaultValue="Nam" /> Nam</label>
                    <label><input name="thanhToan" type="radio" defaultValue="Nu" /> Nữ</label>
                    <label><input name="thanhToan" type="radio" defaultValue="Khac" /> Khác</label>
                </div >
                <div>
                <p htmlFor="birthday">Ngày sinh:</p>
                </div>
                <div>
                <input className="ngaysinh" type="date" name="birthday" />
                </div>
                <br/>
                <div>
                <button className="btn btn-primary">Lưu</button>
                </div>
            </div>
        );
    }
}

export default Me;