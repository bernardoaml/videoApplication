import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App {
  private searchBar: SearchBar;
  private videoList: VideoList;

  constructor() {
    this.searchBar = new SearchBar();
    this.videoList = new VideoList();
  }

  public render(): void {
    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.innerHTML = `
        ${this.searchBar.render()}
        ${this.videoList.render()}
      `;
    }
    this.addEventListeners();
  }

  private addEventListeners(): void {
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
      searchButton.addEventListener('click', () => {
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        if (searchInput) {
          const query = searchInput.value;
          this.videoList.searchVideos(query);
        }
      });
    }
  }
}

export default App;
