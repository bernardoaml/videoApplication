import Header from './Header';
import Navigation from './Navigation';

class App {
  private header: Header;
  private navigation: Navigation;

  constructor() {
    this.header = new Header();
    this.navigation = new Navigation();
  }

  public render(): void {
    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.innerHTML = `
        ${this.header.render()}
        ${this.navigation.render()}
      `;
      this.navigation.addEventListeners();
    }
  }
}

export default App;
