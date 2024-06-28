// const drawerLinks = document.querySelectorAll('.drawer-link');

// drawerLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     // Lógica de navegação entre vídeos e favoritos
//   });
// });

import App from './components/App';

const app = new App();
app.render();

window.addEventListener('hashchange', () => {
  app.render();
});
