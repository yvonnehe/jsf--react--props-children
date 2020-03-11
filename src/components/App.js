import React from 'react';

import Panel from './Panel.js';

export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
      <Panel>
        <p>Look at these dogs</p>
        <img src="https://placedog.net/500/280/random" />
      </Panel>
    </div>
  );
}
