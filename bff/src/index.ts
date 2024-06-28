import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/videos', (req: Request, res: Response) => {
});

app.listen(PORT, () => {
  console.log(`BFF server running on port ${PORT}`);
});
