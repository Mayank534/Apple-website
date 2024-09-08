// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: command === 'serve' ? '/' : '/apple_ui/', 
//   plugins: [react(), sentryVitePlugin({
//     org: "jsm-x9",
//     project: "javascript-react"
//   })],

//   build: {
//     sourcemap: true
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/apple_website/',  // Use '/' for development, '/apple_ui/' for production
    plugins: [
      react(),
      sentryVitePlugin({
        org: 'jsm-x9',
        project: 'javascript-react',
        // Optionally include the authToken if needed for Sentry
        // authToken: 'YOUR_SENTRY_AUTH_TOKEN',
      }),
    ],
    build: {
      sourcemap: true,
    },
  };
});
