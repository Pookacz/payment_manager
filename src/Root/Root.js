import React from "react";
import { Provider } from "react-redux";
import Store from "../Store/index";
import "./index.css";
import Page from "../Components/Page/Page";
import Nav from "../Components/Nav/Nav";
import RightNav from "../Components/RightNav/RightNav";
import Popup from "../Components/Popup/Popup";

class Root extends React.Component {
  state = {
    isPopupOpen: false,
  }

  openPopup = () => {
    this.setState({
      isPopupOpen: true,
    });
  };
  closePopup = () => {
    this.setState({
      isPopupOpen: false,
    });
  };

  render() {
    const { isPopupOpen } = this.state;
    return (
      <Provider store={Store}>
        <div className="wrapper">
          {isPopupOpen && <Popup closePopup={this.closePopup} />}
          <Nav />
          <Page />
          <RightNav openPopup={this.openPopup}/>
        </div>
      </Provider>
    );
  }
}

export default Root;
