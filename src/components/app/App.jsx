import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import React from 'react';

import CharacterContainer from '../../containers/CharacterContainer';
import DetailPage from '../characters/DetailContainer';
import DetailContainer from '../characters/DetailContainer';

export default function App() {
  return (
    <Router>
             <Switch>
                 <Route 
                     path="/" 
                     exact
                     render={(routerProps) => <CharacterContainer {...routerProps} />} 

                 />
                 <Route 
                     path="/:id" 
                     render={(routerProps) => 
                     <DetailContainer {...routerProps} />}
                 />
             </Switch>
    </Router>
  )
}             