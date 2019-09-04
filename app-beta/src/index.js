window.renderAppBeta = ({ id }) => {
  // document.getElementById(id).innerHTML = 'Loading...'

  import("./rootBeta.js").then(({ renderApp }) => {
    renderApp(id);
  });
};
