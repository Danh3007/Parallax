import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line
import callApi from "./../../../utils/apiCaller";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameUser: [],
      email: "",
    };
  }

  // Ẩn thanh menu
  toggleMenu = () => {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
    navigation.onclick = (e) => {
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    };
  };

  clear() {
    document.getElementById("mysearch").value = "";
  }

  async componentDidMount() {
    const userEmail = await localStorage.getItem("email");
    if (userEmail !== null) {
      const user = await callApi("auth/datalogin", "POST", {
        email: userEmail,
      });
      localStorage.setItem("nameUser", user.data.nameUser);
      this.state.nameUser.push(user.data.nameUser);
      this.setState({
        nameUser: this.state.nameUser,
        email: userEmail,
      });
    } else {
      this.state.nameUser.push("ĐĂNG NHẬP");
      this.setState({ nameUser: this.state.nameUser });
    }
  }

  onLogOut = () => {
    localStorage.removeItem("email");
    this.setState({
      nameUser: ["ĐĐĂNG NHẬP"],
    });
  };

  render() {
    let user = this.state.nameUser.map((e) => {
      if (e !== "ĐĂNG NHẬP") {
        if (this.state.email !== "admin@gmail.com") {
          return (
            <div key={e} id="dropdownHeader">
              <li className="nav-item">
                <button className="dropdown__btn nav-link">
                  <p id="hha">{e}</p>
                </button>
              </li>
              <div className="dropdown__menu">
                <li className="nav-item">
                  <Link className="dropdown__menu--item" to="/me">
                    QUẢN LÍ TÀI KHOẢN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown__menu--item" to="/myShop">
                    CỬA HÀNG CỦA BẠN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown__menu--item" to="/cart">
                    GIỎ HÀNG
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.onLogOut}
                    className="dropdown__menu--item"
                    href="/"
                  >
                    ĐĂNG XUẤT
                  </a>
                </li>
              </div>
            </div>
          );
        } else {
          return (
            <div key={e} id="dropdownHeader">
              <li className="nav-item">
                <button className="dropdown__btn nav-link">
                  <p id="hha">{e}</p>
                </button>
              </li>
              <div className="dropdown__menu">
                <li className="nav-item">
                  <Link className="dropdown__menu--item" to="/groupProduct">
                    QUẢN LÍ NHÓM NGÀNH
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown__menu--item" to="/groupUser">
                    QUẢN LÍ NGƯỜI DÙNG
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.onLogOut}
                    className="dropdown__menu--item"
                    href="/"
                  >
                    ĐĂNG XUẤT
                  </a>
                </li>
              </div>
            </div>
          );
        }
      } else {
        return (
          <li key={e} className="nav-item">
            <Link className="nav-link" to="/auth">
              <p>{e}</p>
            </Link>
          </li>
        );
      }
    });

    return (
      <header className="Container-fluid bg-light">
        <nav className="navbar navbar-light bg-light container">
          <Link className="navbar-brand" to="/"></Link>
          <div className="search">
            <div className="icon"></div>
            <div className="input">
              <input
                type="text"
                placeholder="Tìm kiếm trên Parallax"
                id="mysearch"
              />
            </div>
            <span className="clear" onClick={() => this.clear()}></span>
          </div>

          <div className="menuToggle" onClick={this.toggleMenu}></div>
          <div className="navigation navbar-expand-sm ">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <p>TRANG CHỦ</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  <p>SẢN PHẨM</p>
                </Link>
              </li>
              {user}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default header;
