import React, { Component } from 'react';

class changePass extends Component {
    render() {
        return (
            <div>
                <h3 className="h3bank_change_add_me_home">Thay đổi mật khẩu</h3>
                <p className="me">Để bảo mật tài khoảng, vui lòng không chia sẻ cho người khác</p>
                <hr></hr>
                <div className="inputchange">
                    <div>
                        <label htmlFor="password">Mật khẩu hiện tại:</label>
                    </div>
                    <div>
                        <input type="password" autoComplete="off" name="password" />
                    </div>



                    <div>
                        <label htmlFor="password">Mật khẩu mới:</label>
                    </div>
                    <div>
                        <input type="password" autoComplete="off" name="password" />
                    </div>



                    <div>
                        <label htmlFor="password">Xác nhận mật khẩu:</label>
                    </div>
                    <div>
                        <input type="password" autoComplete="off" name="password" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="form-inline">
                    <button className="btn btn-primary">Xác nhận</button>
                    <button className="btn btn-light">Quên mật khẩu?</button>
                </div>
            </div>
        );
    }
}

export default changePass;