import React from 'react';
import TopBar from '../composant/TopBar';
import ModelViewer from '../composant/ModelViewer';
import ModelViewer1 from '../composant/ModelViewer1';
import ModelViewer2 from '../composant/ModelViewer2';

function Home() {
  return (
    <div>
        <TopBar />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
          <ModelViewer />
          <ModelViewer1 />
          <ModelViewer2 />
        </div>
        
      <h1>Home Page</h1>
      <p>Welcome to the homepage of our React app.</p>
    </div>
  );
}

export default Home;
