import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga";
import { useEffect } from 'react';

function App() {

  const userLovesPage = async () => {
    // console.log(window.dataLayer);
    // const resp = await window.dataLayer.push({ 'event': 'lovePage' });
    // console.log(resp);

    ReactGA.event({
      category: 'User',
      action: 'Loves page'
    });
    console.log('User loves page');
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={userLovesPage}>I love this page!</button>
      </header>
    </div>
  );
}

export default App;
