import React from 'react';
import { QueryPayload } from '../../server/server';

function App() {
  return (
    <div className="App">
      {/* NEW */}
      <button
        onClick={() => {
          fetch('http://localhost:3001/data', {})
            .then((response) => response.json())
            .then((data: QueryPayload) => console.log(data.foo));
        }}
      >
        GET SOME DATA
      </button>
    </div>
  );
}

export default App;
