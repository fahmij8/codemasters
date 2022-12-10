import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { Global, css } from '@emotion/react';
import { fonts } from '@workday/canvas-kit-react-fonts';
import { globalStyles } from './styles';
import 'allotment/dist/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <>
      <Global styles={css(fonts, globalStyles)} />
      <Routes />
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
