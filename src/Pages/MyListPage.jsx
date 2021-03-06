import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainTopBar";
import MyListBody from "../Components/MyListPage/MyListBody";
import { makeStyles } from '@material-ui/core/styles';
import SearchBody from "../Components/Search/SearchBody";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    height: '100%',
  }
}));

function MyListPage() {
  const classes = useStyles();

  const [myList, setMyList] = useState([]);

  const globalSearch = useSelector((state) => state.NetflixReducer.globalSearch);


  useEffect(() => {
    setMyList(JSON.parse(localStorage.getItem('myList')));
  }, [])

  return (
    <div className={classes.root}>
      <MainTopBar />
      {globalSearch ? <SearchBody /> : <MyListBody myList={ myList }/>}
      <Footer />
    </div>
  )
}

export default MyListPage;