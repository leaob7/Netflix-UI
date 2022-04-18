import './App.css';
import { Route, Routes } from 'react-router-dom';
import InicialPage from './Pages/InicialPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ba000d',
      dark: 'black'
    },
  },
});

function App() {
  // Router Pages
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={ <InicialPage /> }/>
        <Route path="/browse" />
        <Route path="/browse:id" />
        <Route path="/my-list" />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

