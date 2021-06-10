import 'regenerator-runtime';
import '../style/style.css';
import '../style/responsive.css';
import App from './views/App';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});