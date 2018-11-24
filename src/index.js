import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import factionSelector from './components/factionSelector';
import HeroSelector from './components/heroSelector';
import HeroOverView from './components/heroOverview';
import HeroBuildForm from './components/heroBuildForm';
import Splash from './components/splash';


import BaseLayout from './components/baseLayout'


render(
  <Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
     <Route render={({location})=> console.log(location)|| (
       <TransitionGroup>
         <CSSTransition key={location.key} classNames='fade'timeout={400}>
           <Switch location={location}>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/factionSelect" component={factionSelector}/>
            <Route exact path='/buildForm' component={HeroBuildForm}/>
            <Route exact path='/:faction' component={HeroSelector}/>
            <Route exact path='/:faction/:hero' component={HeroOverView}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )}/>
    </BaseLayout>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
