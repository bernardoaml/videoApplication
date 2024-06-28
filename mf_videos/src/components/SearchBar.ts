class SearchBar {
    public render(): string {
      return `
        <div class="search-bar">
          <input type="text" id="search-input" placeholder="Search videos">
          <button id="search-button">Search</button>
        </div>
      `;
    }
  }
  
  export default SearchBar;
  