import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const manifestForPlugIn: any = {
  registerType: 'prompt',
  includeAssests: ['favicon.ico', "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Tunes",
    short_name: "Tunes",
    description: "Play anywhere.",
    icons: [{
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: '/maskable_icon.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#171717',
    background_color: '#16161d',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  }
}

const DEFAULT_OPTIONS: any = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false,
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  png: {
    quality: 100,
  },
  jpeg: {
    quality: 100,
  },
  jpg: {
    quality: 100,
  },
  tiff: {
    quality: 100,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
};

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(DEFAULT_OPTIONS),
    VitePWA(manifestForPlugIn)
  ],
  server: {
    proxy: {
      '/api': 'http://data:3000'
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
});
