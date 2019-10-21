import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Barry', animal: 'Dog', breed: 'Corgi' }),
    React.createElement(Pet, { name: 'Ginger', animal: 'Dog', breed: 'Corgi' }),
    React.createElement(Pet, {
      name: 'Freddy',
      animal: 'Cat',
      breed: 'Mix Black'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
