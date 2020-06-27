import React, { Component } from 'react';
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
      console.log(resp);
    }).catch((err) => {
      console.log(err);
    })
  }

  render () {
    return (
        <div>
          <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid">Pied Piper</div>
          </nav>
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
