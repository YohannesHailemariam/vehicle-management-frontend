import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import store from './app/store'; // Import the Redux store
import './index.css'; // Import global styles (Tailwind CSS)
import App from './App.jsx'; // Import the App component

// Create the root element and render the App with the Redux Provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your app with the Redux Provider */}
      <App />
    </Provider>
  </StrictMode>
);
