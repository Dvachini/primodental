import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    strictTransportSecurity: false,
    xPoweredBy: false,
  })
);

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com https://lh3.googleusercontent.com;"
  );
  next();
});

app.use(express.json());

// Google Reviews API proxy
app.get('/api/reviews', async (req, res) => {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          place_id: 'ChIJlZWQ2S7bSjARL460RO671to',
          fields: 'name,rating,reviews',
          key: process.env.GOOGLE_API_KEY,
        },
      }
    );

    return res.json(response.data.result);
  } catch (err) {
    console.error('[api] Failed to fetch Google reviews', err?.message || err);
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

app.use(express.static(path.join(process.cwd(), 'dist')));

app.use('/', (req, res, next) => {
  if (req.method !== 'GET') return next();
  res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
});

try {
  app.listen(PORT, () => {
    console.log(
      `[app] primodental is running on port ${PORT} | Deploy mode: ${
        process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
      }`
    );
  });
} catch (error) {
  logger.error(`[app] Error: ${error.message}`);
  process.exit(1);
}
