import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DIST_PATH = path.join(process.cwd(), 'dist');
const INDEX_PATH = path.join(DIST_PATH, 'index.html');

app.use(compression());

// Same-origin SPA — no cross-origin API consumers, so no permissive CORS needed.
// (Removes the previous wildcard `cors()` which set Access-Control-Allow-Origin: *)

// Security headers — tuned for securityheaders.com A+ rating.
const csp = {
  useDefaults: false,
  directives: {
    defaultSrc: ["'self'"],
    baseUri: ["'self'"],
    fontSrc: ["'self'", 'https:', 'data:'],
    formAction: ["'self'"],
    frameAncestors: ["'self'"],
    // Google Maps embed iframe on the landing page
    frameSrc: [
      "'self'",
      'https://www.google.com',
      'https://maps.google.com',
    ],
    // Google Maps embeds/images used on the landing page
    imgSrc: [
      "'self'",
      'data:',
      'https://maps.gstatic.com',
      'https://maps.googleapis.com',
      'https://lh3.googleusercontent.com',
    ],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'"],
    scriptSrcAttr: ["'none'"],
    styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
    connectSrc: ["'self'", 'https://maps.googleapis.com'],
    upgradeInsecureRequests: [],
  },
};

// Permissions-Policy: helmet 8 doesn't ship one — deny all unused browser features.
app.use((req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), interest-cohort=()'
  );
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: csp,
    crossOriginResourcePolicy: { policy: 'same-origin' },
    strictTransportSecurity: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
  }),
);

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
      },
    );

    return res.json(response.data.result);
  } catch (err) {
    console.error('[api] Failed to fetch Google reviews', err?.message || err);
    return res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

if (!fs.existsSync(INDEX_PATH)) {
  console.warn(
    '[app] dist/index.html is missing. Run `npm run build` before starting production.',
  );
}

app.use(express.static(DIST_PATH));

app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith('/api')) return next();

  // Do not rewrite requests for static files; let express return 404 instead.
  if (path.extname(req.path)) return next();

  return res.sendFile(INDEX_PATH);
});

try {
  app.listen(PORT, () => {
    console.log(
      `[app] primodental is running on port ${PORT} | Deploy mode: ${
        process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
      }`,
    );
  });
} catch (error) {
  console.error(`[app] Error: ${error.message}`);
  process.exit(1);
}
