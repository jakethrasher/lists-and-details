import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import React from 'react';

import CharacterContainer from '../../containers/CharacterContainer';

export default function App() {
  return (
    <Router>
             <Switch>
                 <Route 
                     path="/" 
                     component={CharacterContainer}
                 />
             </Switch>
         </Router>
  )
}
                