import { BrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout/index';
import { RouteManager } from './components/RouteManager';

import { rootStore, StoreProvider } from './store';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider value={rootStore}>
        <Layout>
          <RouteManager />
        </Layout>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
