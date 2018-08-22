import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './homepage';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={HomePage}/>
    </div>
  </BrowserRouter>
)

export default App;
