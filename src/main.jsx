import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ─── Site-wide Image Protection ───────────────────────────────────────────────
// Block right-click (context menu) for the entire document.
// This is standard practice for portfolio/photography sites.
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// Block drag-to-desktop on any image
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

// Block keyboard shortcut Ctrl+S / Cmd+S (Save Page As)
document.addEventListener('keydown', (e) => {
  const isSave = (e.ctrlKey || e.metaKey) && e.key === 's';
  const isPrint = (e.ctrlKey || e.metaKey) && e.key === 'p';
  if (isSave || isPrint) {
    e.preventDefault();
    return false;
  }
});
// ─────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
