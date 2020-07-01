import React, { Component } from 'react';

class AddressPage extends Component {

    render () {
        return (
        <div className="addressDiv">
            <div className="fromToDiv">
              <div className="fromAddDiv">
                <div className="dropWrapDiv">
                  <div className="addressLabelDiv"><span>From</span></div>
                  <div className="addressDropDiv">
                      <div className="dropDownDiv"><span className="dropTextDiv">From address</span><i className="fa fa-chevron-down btmArrow"></i></div>
                  </div>
                </div>
              </div>
              <div className="toAddDiv">
                <div className="dropWrapDiv">
                  <div className="addressLabelDiv"><span>To</span></div>
                  <div className="addressDropDiv">
                      <div className="dropDownDiv"><span className="dropTextDiv">To address</span><i className="fa fa-chevron-down btmArrow"></i></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        );
    }

}

export {AddressPage};