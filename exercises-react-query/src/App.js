import './App.css';
import { QueryClient } from 'react-query';
import { QueryClientProvider, ReactQueryDevTools } from 'react-query/types/react';
import Posts from './Posts';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Posts />
      </div>
      <ReactQueryDevTools></ReactQueryDevTools>
    </QueryClientProvider>
  );
}

export default App;
