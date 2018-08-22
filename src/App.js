import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import factionSelector from './components/factionSelector';


import Button from '@material-ui/core/Button';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <Route render={({location})=> console.log(location)|| (
           <TransitionGroup>
             <CSSTransition key={location.key} classNames='fade'timeout={400}>
               <Switch location={location}>
                <Route exact path="/" component={factionSelector}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
      </BrowserRouter>


    );
  }
}

export default App;
