import React from 'react';
import { QueryPayload } from '../../server/src/server';

function App() {
  return (
    <div className="App">
      <div className="">
        <p className="">test text</p>
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
    </div>
  );
}

export default App;
