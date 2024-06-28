import axios from 'axios';

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
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <button data-video-id="${video.id}">Play</button>
          </div>
        `).join('')}
      </div>
    `;
  }

  public async searchVideos(query: string): Promise<void> {
    const response = await axios.get(`/api/videos?q=${query}`);
    this.videos = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description
    }));
    this.update();
  }

  private update(): void {
    const videoListElement = document.getElementById('video-list');
    if (videoListElement) {
      videoListElement.innerHTML = this.render();
    }
  }
}

export default VideoList;
