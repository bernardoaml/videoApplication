import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

app.use(express.json());

app.get('/api/videos', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).send('Query parameter "q" is required');
  }

  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        key: YOUTUBE_API_KEY,
        q: query,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
      },
      timeout: 5000, // Timeout de 5 segundos
    });

    const videos = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.default.url,
    }));

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`BFF server running on port ${PORT}`);
});
