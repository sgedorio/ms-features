import './App.css';
import Section from "./components/Section"
import data from "./data"

function App() {

  const sections = data.map(item => (
    <Section key={item.id} item={item} />
  ))

  return (
    <div className="App">
      <div className="description">
        {/* <img src={process.env.PUBLIC_URL + `/img/logo.svg`} className="ms--logo" alt="MS-logo" /> */}
        <p>A collection of prototypes & features I designed as a Product Designer at Marine Snow.</p>
      </div>
      {sections}
    </div>
  );
}

export default App;
