import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainPage/MainTopBar";
import MyListBody from "../Components/MyListPage/MyListBody";
import { makeStyles } from '@material-ui/core/styles';
import SearchBody from "../Components/Search/SearchBody";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    height: '100%',
  }
}));

function MyListPage() {
  const classes = useStyles();
  const listFromRedux = useSelector((state) => state.NetflixReducer.myList);
  const globalSearch = useSelector((state) => state.NetflixReducer.globalSearch);


  return (
    <div className={classes.root}>
      <MainTopBar />
      {globalSearch ? <SearchBody /> : <MyListBody myList={ listFromRedux }/>}
      <Footer />
    </div>
  )
}

export default MyListPage;