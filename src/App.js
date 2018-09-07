import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import factionSelector from './components/factionSelector';
import HeroSelector from './components/heroSelector';
import HeroOverView from './components/heroOverview';
import { ConnectedRouter} from 'react-router-redux'
import {history} from './redux/store';



import BaseLayout from './components/baseLayout'

import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>

      <BrowserRouter>
        <BaseLayout>
         <Route render={({location})=> console.log(location)|| (
           <TransitionGroup>
             <CSSTransition key={location.key} classNames='fade'timeout={400}>
               <Switch location={location}>
                <Route exact path="/" component={factionSelector}/>
                <Route exact path='/:faction' component={HeroSelector}/>
                <Route exact path='/:faction/:hero' component={HeroOverView}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
        </BaseLayout>
      </BrowserRouter>
    </ConnectedRouter>


    );
  }
}

export default App;
