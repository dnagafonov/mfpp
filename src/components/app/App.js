import React from 'react';
import Header from "../header";
import './app.css'
import InfoComponent from "../info";

function App() {
  return (
    <div className='general-options'>
      <Header/>
      <InfoComponent/>
    </div>
  );
}

export default App;
