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
    console.log("App renderizado com sucesso.");
  } catch (error) {
    console.error("Erro ao renderizar:", error);
    container.innerHTML = `<div style="color: white; padding: 20px; text-align: center;">Erro de renderização: ${error.message}</div>`;
  }
} else {
  console.error("Elemento #root não encontrado.");
}