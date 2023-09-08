import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LoginSection from "./Component/AccountSection/LoginSection";
import AddCourse from "./Component/AddCourse/AddCourse";
import AddNumber from "./Component/AddNumber/AddNumber";
import AssignCourse from "./Component/AssignCourse/AssignCourse.jsx";
import Edit from "./Component/AssignCourse/EditSection";
import DeleteProfile from "./Component/AssignTeacherProfile/DeleteProfile";
import CourseList from "./Component/CourseList/CourseList";
import CourseStudentsList from "./Component/CourseStudentsList/CourseStudentsList";
import DeleteCourse from "./Component/Delete/DeleteCourse";
import DepartmentProfile from "./Component/DepartmentProfile/DepartmentProfile";
import EditNumber from "./Component/EditNumber/EditNumber";
import EditTeachersProfile from "./Component/EditTeachersProfile/EditTeachersProfile";
import ExamController from "./Component/ExamControllerProfile/ExamControllerProfile.jsx";
import ViewResult from "./Component/ExamControllerProfile/ViewResult";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Nevbar from './Component/Nevbar/Nevbar';
import PublisedNumber from "./Component/PublisedNumber/PublisedNumber";
import Registration from "./Component/RegistrationFrom/Registration";
import TeachersProfile from "./Component/TeachersProfile/TeachersProfile";
import ViewTeachersProfile from "./Component/ViewTeachersProfile/ViewTeachersProfile";
export const userContext = createContext();
function App() {
  const[login,setLogin]=useState(false);
  const[Adminlogin,setAdminlogin]=useState(false);

  const[teacherslogin,setTeacherslogin]=useState(false);
  const[AssignTechers,setAssignTechers]=useState(false);
  const[Controler,setControler]=useState(false);
  const[CourseName,setCourseName]=useState([]);

  return (
    <userContext.Provider value={[login,setLogin,Adminlogin,setAdminlogin,AssignTechers,setAssignTechers,CourseName,setCourseName,teacherslogin,setTeacherslogin, Controler,setControler]}>
    <BrowserRouter>
    <div className="app-container">
      <Nevbar/>
       <Routes>
        
        
        {/* {(sessionStorage.getItem('StudentsID')||login===true)? <Route path="/StudentsProfile" element={ <StudentsProfile/>}></Route> :<Route path="/StudentsProfile" element={ <LoginSection/>}>     </Route> }   */}
       
       {(sessionStorage.getItem("DepartmentLogin")||Adminlogin===true)?<> <Route path="/ViewProfile/:id" element={<ViewTeachersProfile/> }/> <Route path="/RegistrationForm" element={<Registration/>}/> <Route path="/CourseAdd" element={<AddCourse/>}/> <Route path="/CourseList" element={<CourseList/>}></Route> <Route path="/DepartmentCSE" element={ <DepartmentProfile/> }/>   <Route path="/CourseList/:id"  element={ <Edit/> }/>  <Route path="/DeleteteachersProfile/:id"  element={ <DeleteProfile/> }/>    <Route path="/AssignCourse" element={<AssignCourse/> }/> <Route path="/DeleteCourse/:id" element={ <DeleteCourse/>}/>   <Route path="/EditTeachersProfile/:id" element={ <EditTeachersProfile/> }/>  </> :<Route path="/login" element={ <LoginSection/>}>     </Route> }  
       {(sessionStorage.getItem("TeachersLogin")||teacherslogin===true)?<>  <Route path="/EditNumber/:id" element={<EditNumber/> }/> <Route path="/publisedResult/:course" element={<PublisedNumber/> }/> <Route path="/viewstudentsList/:id/:course/:credit" element={<CourseStudentsList/> }/>  <Route path="/AddNumber/:course/:id/:semester/:name/:registation/:credit" element={<AddNumber/> }/>  <Route path="/TeachersProfile" element={<TeachersProfile/>} /> </> :<Route path="/login" element={ <LoginSection/>}>     </Route> }  
       {(sessionStorage.getItem("ExamControler")||Controler===true)?<><Route path="viewResult/:semester/:roll" element={<ViewResult/> }/>   <Route path="/ControlerProfile" element={<ExamController/> }/> </> :<Route path="/login" element={ <LoginSection/>}>     </Route> }  
     
        <Route path="/" element={<Home/>}>
     </Route>
     </Routes>
 
     </div>
     <Footer/>
          </BrowserRouter>
          </userContext.Provider>
  );
}

export default App;
