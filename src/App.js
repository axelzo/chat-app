import { React } from 'react';
import AppState from './context/State/state';
import Home from './pages/Home/Home';


import './App.css';


function App() {
  return (
    <AppState>
      <div className='App'>
        <Home/>
      </div>
    </AppState>
  );
}

export default App;
