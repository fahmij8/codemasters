import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { Global, css } from '@emotion/react';
import { fonts } from '@workday/canvas-kit-react-fonts';
import { globalStyles, appTheme } from './styles';
import { CodemastersProvider, ToastProvider, ModalProvider } from './context';
import { CanvasProvider } from '@workday/canvas-kit-react/common';
import 'allotment/dist/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <>
      <Global styles={css(fonts, globalStyles)} />
      <CanvasProvider theme={appTheme}>
        <CodemastersProvider>
          <ToastProvider>
            <ModalProvider>
              <Routes />
            </ModalProvider>
          </ToastProvider>
        </CodemastersProvider>
      </CanvasProvider>
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
