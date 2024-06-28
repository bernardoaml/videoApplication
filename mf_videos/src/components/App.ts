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
      this.searchBar.addEventListeners(this.videoList.searchVideos.bind(this.videoList));
    }
  }
}

export default App;
