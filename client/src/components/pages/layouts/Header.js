import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // eslint-disable-line
import callApi from "./../../../utils/apiCaller"

class header extends Component {

  constructor(props) {
    super(props)
    this.state={
      nameUser: []
    }
  }

  // Ẩn thanh menu
  toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  };

  clear(){
    document.getElementById('mysearch').value = ''
  }

  async componentDidMount() {
    const userEmail = await localStorage.getItem('email');
    if (userEmail !== null) {
      const user = await callApi("auth/datalogin","POST",{email: userEmail})
      this.state.nameUser.push(user.data.nameUser);
      this.setState({ nameUser:this.state.nameUser });
    } else {
      this.state.nameUser.push("Đăng nhập");
      this.setState({ nameUser:this.state.nameUser });
    }
  }

  render() {
   
    let user = this.state.nameUser.map((e)=>{
      return  <li key={e} className="nav-item">
                <Link className="nav-link" to="/auth"><p>{e}</p></Link>
              </li>
      
    })

    return (
      <header className="Container-fluid bg-light">
        <nav className="navbar navbar-light bg-light container">
          <Link className="navbar-brand" to="/"></Link>
          <div className="search">
            <div className="icon"></div>
            <div className="input">
              <input type="text" placeholder="Tìm kiếm trên Parallax" id="mysearch"/>
            </div>
            <span className="clear" onClick={() => this.clear()}></span>
          </div>

          <div className="menuToggle" onClick={() => this.toggleMenu()}></div>
          <div className="navigation navbar-expand-sm ">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/"><p>Trang chủ</p></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"><p>Giới thiệu</p></Link>
              </li>

              {/*  */}
              {user}
              {/*  */}

              <li className="nav-item">
                <Link className="nav-link" to="/me"><p>Quản lí</p></Link>
              </li>
              
            </ul>
          </div>

        </nav>
      </header>
    );
  }
}

export default header;
