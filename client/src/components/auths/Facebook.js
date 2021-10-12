import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (e) => {
    console.log(e);
    // this.setState({
    //   isLoggedIn: true,
    //   userID: e.userID,
    //   name: e.name,
    //   email: e.email,
    //   picture: e.picture.data.url,
    // });
  };

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = <div></div>;
    } else {
      fbContent = (
        <FacebookLogin
          appId="409063510737329"
          size="medium"
          textButton="Đăng nhập với Facebook"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div className="btn btn-fb">
        {fbContent}
      </div>
    );
  }
}

export default Facebook;
