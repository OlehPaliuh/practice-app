import React from 'react';
import './App.css';
import NavBarComp from './NavBarComp'
import Questions from './Questions'
import QuestionCard from './QuestionCard'
import CreateQuestion from './CreateQuestion'
import {Route, Switch} from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBarComp />
        <div className="container containerStyleTop">
        <Switch>
        <Route exact path='/' component={Questions} />
        <Route exact path='/question/:questionId' component={QuestionCard} />
        <Route path='/new-question' component={CreateQuestion} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
