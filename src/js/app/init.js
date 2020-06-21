import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

const initialize = () => {

    ReactDOM.render(
        <div>
          Hello react is working
        </div>,
        document.getElementById('OuterFrame')
      );

};

export {initialize};
