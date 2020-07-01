import React, { Component } from 'react';
import {TopBar} from "./userAuthorization/view/topBar"
import {AddressPage} from "./addressPage/view/addressHome";
import ReactDOM from 'react-dom';

import "../../css/index.css";

class Init extends Component {

  componentDidMount = () => {
    fetch("http://localhost:8080/PiedPiper/rest/helloapi",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((resp) => {
      console.log("success");
    }).catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
      <div className="wrapper">
        <TopBar />
        <div className="menuNavigation"></div>
        <div className="blkWrapper">
          <div className="cBlk">
            <AddressPage />
          </div>
        </div>
      </div>
    );
  }

}

const initialize = () => {

    ReactDOM.render(
        <Init />,
        document.getElementById('OuterFrame')
      );

};

export {initialize};
