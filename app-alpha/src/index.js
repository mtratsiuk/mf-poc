window.renderAppAlpha = ({ id }) => {
  document.getElementById(id).innerHTML = 'Loading...'

  import('./root.js')
      .then(({ renderApp }) => {
        renderApp(id)
      })
}
