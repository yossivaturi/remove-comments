import './App.css';
import ReadFile from './components/ReadFile';
import Output from './components/Output';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact render={() => <Redirect to="/read-file" />}/> 
          <Route path='/read-file' component={ReadFile} />
          <Route path='/output' component={Output} />
        </Switch>
    </div>
  );
}

export default App;
