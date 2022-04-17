import './App.css';
import { Route, Routes } from 'react-router-dom';
import InicialPage from './Pages/InicialPage';

function App() {
  // Router Pages
  return (
      <Routes>
        <Route path="/" element={ <InicialPage /> }/>
        <Route path="/browse" />
        <Route path="/browse:id" />
        <Route path="/my-list" />
      </Routes>
  );
}

export default App;

