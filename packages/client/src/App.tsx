import React, { useState } from 'react';
import { QueryPayload } from '../../server/src/server';

import widgets from './mock-data/widgets';
import people from './mock-data/people';
import SearchInput from './components/SearchInput';
import Sorters from './components/Sorters';
import Filters from './components/Filters';
import WidgetRenderer from './components/renderers/WidgetRenderer';
import PeopleRenderer from './components/renderers/PeopleRenderer';

function App() {
  const [showPeople, setShowPeople] = useState<boolean>(false);
  const buttonText = showPeople ? 'Show widgets' : 'Show people';

  return (
    <div className="App">
      {/* <======================> */}
      {/* <button
        onClick={() => {
          fetch('http://localhost:3001/data', {})
            .then((response) => response.json())
            .then((data: QueryPayload) => console.log(data.foo));
        }}
      >
        GET SOME DATA
      </button> */}
      {/* <======================> */}
      <button
        className="btn btn-primary"
        onClick={() => setShowPeople(!showPeople)}
      >
        {buttonText}
      </button>
      {!showPeople && (
        <>
          <h2>Widgets:</h2>
          <SearchInput
            dataSource={widgets}
            searchKeys={['title', 'description']}
          >
            {(widget) => <WidgetRenderer {...widget} />}
          </SearchInput>
          <Sorters dataSource={widgets} initialSortProperty="title">
            {(widget) => <WidgetRenderer {...widget} />}
          </Sorters>
          <Filters dataSource={widgets}>
            {(widget) => <WidgetRenderer {...widget} />}
          </Filters>
        </>
      )}
      {showPeople && (
        <>
          <h2>People:</h2>
          <SearchInput
            dataSource={people}
            searchKeys={['firstName', 'lastName', 'eyeColor']}
          >
            {(person) => <PeopleRenderer {...person} />}
          </SearchInput>
          <Sorters dataSource={people} initialSortProperty="firstName">
            {(person) => <PeopleRenderer {...person} />}
          </Sorters>
          <Filters dataSource={people}>
            {(person) => <PeopleRenderer {...person} />}
          </Filters>
        </>
      )}
    </div>
  );
}

export default App;
