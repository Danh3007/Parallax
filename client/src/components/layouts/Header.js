import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

class header extends Component {
  
  render() {
    return (
      <header>
        <a href="" class="logo"></a>
        <div class="menuToggle"  onClick="{toggleMenu}"></div>
        <ul class="navigation">
            <li><a href="#banner" onClick="{toggleMenu}">Trang chủ</a></li>
            <li><a href="#support" onClick="{toggleMenu}">Hỗ trợ</a></li>
            <li><a href="#contact" onClick="{toggleMenu}">Liên hệ</a></li>
            <li><a href="#login" onClick="{toggleMenu}"><Link to="/auth/login">Đăng nhập</Link></a></li>
            <li><a href="#register" onClick="{toggleMenu}"><Link to="/auth/register">Đăng kí</Link></a></li>
        </ul>
      </header>
    );
  }
}

export default header;
