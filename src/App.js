import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LoginSection from "./Component/AccountSection/LoginSection";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Nevbar from './Component/Nevbar/Nevbar';
import StudentsProfile from "./Component/StudentsProfile/StudentsProfile";
export const userContext = createContext();
function App() {
  const[login,setLogin]=useState(false);

  return (
    <userContext.Provider value={[login,setLogin]}>
    <BrowserRouter>
      <Nevbar/>
       <Routes>
        
        {(sessionStorage.getItem('StudentsID')||login===true)? <Route path="/StudentsProfile" element={ <StudentsProfile/>}></Route> :<Route path="/StudentsProfile" element={ <LoginSection/>}>     </Route> }  
       
       {(sessionStorage.getItem('StudentsID')||login===true)? <Route path="/login" element={ <StudentsProfile/>}></Route> :<Route path="/login" element={ <LoginSection/>}>     </Route> }  
     
        <Route path="/" element={<Home/>}>
     </Route>
     </Routes>
     <Footer/>
          </BrowserRouter>
          </userContext.Provider>
  );
}

export default App;
