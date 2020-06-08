import React from 'react';
import './App.css';

import TextInput from './subpage/TextInput';
import TextOutput from './subpage/TextOutput';

function App() {
  return (
    <div className="row">
      <div className="column">
        <TextInput />
      </div>
      <div className="vr">&nbsp;</div>
      <div className="column">
        <TextOutput />
      </div>
    </div>
  );
}

export default App;
