import './App.css';
import { Router, Route } from 'react-router-dom';

function App() {
  // Router Pages
  return (
      <Router>
        <Route path="/" />
        <Route path="/browse" />
        <Route path="/browse:id" />
        <Route path="/my-list" />
      </Router>
  );
}

export default App;

