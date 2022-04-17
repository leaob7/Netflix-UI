import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  // Router Pages
  return (
      <Switch>
        <Route path="/" />
        <Route path="/browse" />
        <Route path="/browse:id" />
        <Route path="/my-list" />
      </Switch>
  );
}

export default App;

