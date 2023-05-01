import React, {useState,lazy, Suspense} from "react";
import { BrowserRouter,Route ,Routes} from "react-router-dom";
import Header from "./components/Header"
// import Apptemplate from "./components/Apptemplate";
// import AllVideos from "./components/AllVideos";
import { Box } from "@mui/material";
// import VideoDetails from "./components/VideoDetails";
// import search from "./components/search";
import "./App.css"

// const Header = lazy(()=>import("./components/Header"))
const Apptemplate = lazy(()=>import("./components/Apptemplate"))
const AllVideos = lazy(()=>import("./components/AllVideos"))
const VideoDetails = lazy(()=>import("./components/VideoDetails"))
const search = lazy(()=>import("./components/search"))

function App() {

  const [isMenuOpen,setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu((prev)=>!prev)
  }

  return (
   <Box className="App" >
    <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apptemplate component={AllVideos} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
      <Route path="/video/:id" element={<Suspense fallback={<div>Loading....</div>}><VideoDetails/></Suspense>}/>
      <Route path="/search/:query" element={<Apptemplate component={search} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
    </Routes>
    
    </BrowserRouter>


    </Box>
  );
}

export default App;
