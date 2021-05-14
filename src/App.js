import React from 'react'
import { QueryClient,QueryClientProvider } from 'react-query'
import FormData from './FormData'


const queryClient = new QueryClient();
function App() {
  return (
  <div>
  <QueryClientProvider client={queryClient}>
    <FormData />
  </QueryClientProvider>
  </div>
  );
}

export default App;