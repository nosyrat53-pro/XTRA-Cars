
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Layout from './Layout/Layout';
import SelectModal from 'components/SelectModal/SelectModal';

import AllRoutes from './routes';

function App() {

  const queryClient = new QueryClient();


  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AllRoutes />
      </Layout>
    </QueryClientProvider>
    </div>
  );
}

export default App;
