class Navigation {
    public render(): string {
      return `
        <nav>
          <a href="#videos" class="drawer-link">Vídeos</a>
          <a href="#favorites" class="drawer-link">Favoritos</a>
        </nav>
      `;
    }
  
    public addEventListeners(): void {
      const links = document.querySelectorAll('.drawer-link');
      links.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const target = (event.target as HTMLAnchorElement).getAttribute('href');
          if (target) {
            window.location.hash = target;
          }
        });
      });
    }
  }
  
  export default Navigation;
  