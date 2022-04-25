import './App.css';
import { Route, Routes } from 'react-router-dom';
import InicialPage from './Pages/InicialPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { netflixFont as netflix } from './fonts/muiFonts';
import MainPage from './Pages/MainPage';
import MoviesPage from './Pages/MoviesPage';
import SeriesPage from './Pages/SeriesPage';
import MyListPage from './Pages/MyListPage';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, netflix',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [netflix],
      }
    }
  },
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
        <Route path="/browse" element={ <MainPage /> }/>
        <Route path="/browse/movies" element={ <MoviesPage /> }/>
        <Route path="/browse/series" element={ <SeriesPage /> }/>
        <Route path="/my-list" element={ <MyListPage /> }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

