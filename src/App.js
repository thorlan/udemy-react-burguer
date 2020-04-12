import React from 'react';

import Layout from './containers/Layout/Layout'
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurguerBuilder></BurguerBuilder>
      </Layout>
    </div>
  );
}

export default App;
