import { BrowserRouter as Router } from 'react-router-dom';

import { FormEncodeDecodeUrlProvider } from './hooks/useEncodeDecodeUrl';

import Routes from './routes';

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <FormEncodeDecodeUrlProvider>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </FormEncodeDecodeUrlProvider>
  );
}

