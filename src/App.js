import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      {/* <Pet name='Barry' animal='Dog' breed='Corgi' />
      <Pet name='Ginger' animal='Dog' breed='Corgi' />
      <Pet name='Freddy' animal='Cat' breed='Mix' /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));


