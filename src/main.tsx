import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import App from './App.tsx';
import '@fontsource/inter/100.css'; // Thin
import '@fontsource/inter/100-italic.css';
import '@fontsource/inter/200.css'; // Extra Light
import '@fontsource/inter/200-italic.css';
import '@fontsource/inter/300.css'; // Light
import '@fontsource/inter/300-italic.css';
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/400-italic.css';
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/500-italic.css';
import '@fontsource/inter/600.css'; // Semi Bold
import '@fontsource/inter/600-italic.css';
import '@fontsource/inter/700.css'; // Bold
import '@fontsource/inter/700-italic.css';
import '@fontsource/inter/800.css'; // Extra Bold
import '@fontsource/inter/800-italic.css';
import '@fontsource/inter/900.css'; // Black
import '@fontsource/inter/900-italic.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
