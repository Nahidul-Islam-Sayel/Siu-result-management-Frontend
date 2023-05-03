import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LoginSection from "./Component/AccountSection/LoginSection";
import Home from "./Component/Home/Home";
import Nevbar from './Component/Nevbar/Nevbar';

function App() {
  return (
    <BrowserRouter>
      <Nevbar/>
       <Routes>
          <Route path="/login" element={ <LoginSection/>}>    
          </Route>
        <Route path="/" element={<Home/>}>
     </Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
