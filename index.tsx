
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Erro ao renderizar a aplicação:", error);
    container.innerHTML = `<div style="color: white; padding: 20px; text-align: center;">Erro ao carregar o site. Verifique o console.</div>`;
  }
} else {
  console.error("Elemento #root não encontrado no DOM.");
}
