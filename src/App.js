import React from 'react';
import Layout from './components/Layout/Layout';
import CupTable from './containers/CupTable/CupTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <CupTable />
      </Layout>
    </div>
  );
}

export default App;
