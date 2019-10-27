import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name='Barry' animal='Dog' breed='Corgi' />
      <Pet name='Ginger' animal='Dog' breed='Corgi' />
      <Pet name='Freddy' animal='Cat' breed='Mix' />
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
