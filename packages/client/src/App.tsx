import React, { useState } from 'react';
import { QueryPayload } from '../../server/src/server';

import widgets from './mock-data/widgets';
import people from './mock-data/people';
import genericSearch from './utils/genericSearch';
import genericSort from './utils/genericSort';
import SearchInput from './components/SearchInput';
import IProperty from './interfaces/IProperty';
import IWidget from './interfaces/IWidget';
import IPerson from './interfaces/IPerson';
import Sorters from './components/Sorters';
import WidgetRenderer from './components/renderers/WidgetRenderer';
import PeopleRenderer from './components/renderers/PeopleRenderer';
import genericFilter from './utils/genericFilter';

function App() {
  const [query, setQuery] = useState<string>('');
  const [showPeople, setShowPeople] = useState<boolean>(false);
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({
    property: 'title',
    isDescending: true,
  });
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<keyof IWidget>
  >([]);
  const [peopleSortproperty, setPeopleSortProperty] = useState<
    IProperty<IPerson>
  >({
    property: 'firstName',
    isDescending: true,
  });
  const [peopleFilterProperties, setPeopleFilterProperties] = useState<
    Array<keyof IPerson>
  >([]);
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
      <SearchInput
        setSearchQuery={(query) => {
          console.log('debounced applied!!!');
          setQuery(query);
        }}
      />
      {showPeople && (
        <div className="">
          <h2>Widgets</h2>
          <Sorters
            object={widgets[0]}
            setProperty={(propertyType) => setWidgetSortProperty(propertyType)}
          />
          {widgets
            .filter((widget) =>
              genericSearch(widget, ['title', 'description'], query, false)
            )
            .filter((widget) => genericFilter(widget, widgetFilterProperties))
            .sort((a, b) => genericSort(a, b, widgetSortProperty))
            .map((widget) => {
              return <WidgetRenderer {...widget} />;
            })}
        </div>
      )}

      <div>
        <h2>People</h2>
        <Sorters
          object={people[0]}
          setProperty={(propertyType) => setPeopleSortProperty(propertyType)}
        />
        {people
          .filter((person) =>
            genericSearch(
              person,
              ['firstName', 'lastName', 'eyeColor'],
              query,
              false
            )
          )
          .filter((person) => genericFilter(person, peopleFilterProperties))
          .sort((a, b) => genericSort(a, b, peopleSortproperty))
          .map((person) => {
            return <PeopleRenderer {...person} />;
          })}
      </div>
    </div>
  );
}

export default App;
