/* globals glob */
/* eslint-disable */  
__webpack_public_path__ = glob.staticUrl.js;

const route = () => {
  import(/* webpackChunkName: "appInit" */ "./app/init.js").then(({initialize}) => {
      initialize();
  });
};

route();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
