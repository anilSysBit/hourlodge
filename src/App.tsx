import { useState,useEffect } from "react";
import "./styles/main.css";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import reactLogo from "./assets/react.svg";
import HomePage from "./pages/HomePage";
import Footer from "./globalComponents/home/Footer";
import Explore from "./pages/Explore";
import PopopMessage from "./features/PopopMessage";
import { setScrollWidth } from "./store/slices/screenSlice";
import { newDate } from "./store/slices/filterSlice";

const ScrollToTop =()=>{
  const {pathname} = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname]);

  return null;
}

const App=()=> {

  const [screen, setScreen] = useState(true);
  const dispatch = useDispatch();

  const handleWindowScroll =()=>{
    dispatch(setScrollWidth(window.scrollY))
  }

  
  useEffect(()=>{

    dispatch(newDate(new Date()));
    window.addEventListener('scroll',handleWindowScroll)

    return()=>{
      window.removeEventListener('scroll',handleWindowScroll)
    }
  },[dispatch,newDate])
  return (
    <div className="App">
      <BrowserRouter>
        {screen ? <PopopMessage screen={setScreen} /> : null}
          <ScrollToTop/>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
