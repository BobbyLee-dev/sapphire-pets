const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: 'Barry', animal: "Dog", breed: 'Corgi' }),
    React.createElement(Pet, { name: 'Ginger', animal: "Dog", breed: 'Corgi' }),
    React.createElement(Pet, { name: 'Freddy', animal: "Cat", breed: 'Mix Black' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));