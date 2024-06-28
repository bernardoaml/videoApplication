class SearchBar {
  public render(): string {
    return `
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search videos">
        <button id="search-button">Search</button>
      </div>
    `;
  }

  public addEventListeners(searchCallback: (query: string) => void): void {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input') as HTMLInputElement;

    searchButton?.addEventListener('click', () => {
      const query = searchInput.value;
      if (query) {
        searchCallback(query);
      }
    });
  }
}

export default SearchBar;
