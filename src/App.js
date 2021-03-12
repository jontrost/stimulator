import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

function NavBar() {
  return (
    <div className="NavBar">
      <NavElement name="Dashboard"></NavElement>
      <NavElement name="Portfolio"></NavElement>
      <NavElement name="Browse"></NavElement>
      <NavElement name="Watchlist"></NavElement>
      <NavElement name="Settings"></NavElement>
    </div>
  );
}

function NavElement(props) {
  return (
    <a className="NavElement">{props.name}</a>
  );
}

export default App;
