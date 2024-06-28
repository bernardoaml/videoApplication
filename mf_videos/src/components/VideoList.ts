class VideoList {
  private videos: any[];

  constructor() {
    this.videos = [];
  }

  public render(): string {
    return `
      <div class="video-list" id="video-list">
        ${this.videos.map(video => `
          <div class="video-item">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <button data-video-id="${video.id}">Play</button>
            <button data-video-id="${video.id}" class="favorite-button">Favorite</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  public async searchVideos(query: string): Promise<void> {
    try {
      const response = await fetch(`/api/videos?q=${query}`);
      this.videos = await response.json();
      this.update();
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  private update(): void {
    const videoListElement = document.getElementById('video-list');
    if (videoListElement) {
      videoListElement.innerHTML = this.render();
      this.addEventListeners();
    }
  }

  private addEventListeners(): void {
    const playButtons = document.querySelectorAll('.video-item button[data-video-id]');
    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video-id');
        // Lógica para reproduzir vídeo
      });
    });

    const favoriteButtons = document.querySelectorAll('.video-item .favorite-button');
    favoriteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video-id');
        // Lógica para marcar como favorito
      });
    });
  }
}

export default VideoList;
