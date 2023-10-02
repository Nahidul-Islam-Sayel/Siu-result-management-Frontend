import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import siubd from '../../asset/Image/SIULOGO.png';
import './Loginsection.css';

const LoginSection = () => {
    const [login, setLogin, Adminlogin, setAdminlogin, teacherslogin, setTeacherslogin, Controler, setControler] = useContext(userContext);
    const [newStudent, setNewStudent] = useState({
        StudentsID: "",
        password_1: ""
    });
    const [department, setNewDepartment] = useState({
        Department: "",
        password_2: ""
    });
    const [TeachersInfo, setTeachersInfo] = useState({
        name: "",
        password: ""
    })
    const [ControlerInfo, setControlerInfo] = useState({
        name: "",
        password: ""
    })
    const [Students, setStudents] = useState(true);
    const [Teachers, seTeachers] = useState(false);
    const [Admin, setAdmin] = useState(false);
    const [Controller, setController] = useState(false);
    const [AccountSection, setAccountSection] = useState(false);
    const [controlerPro, setControlerPro] = useState(false);
    const [teachersProfile, setteachersProfile] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        })
    }
    const handleChangeDepartment = (e) => {
        const { name, value } = e.target;
        setNewDepartment({
            ...department,
            [name]: value,
        })
    }
    const handleTeachersChange = (e) => {
        const { name, value } = e.target;
        setTeachersInfo({
            ...TeachersInfo,
            [name]: value,
        })
    }
    const handleControlerChange = (e) => {
        const { name, value } = e.target;
        setControlerInfo({
            ...ControlerInfo,
            [name]: value,
        })
    }
    const [departmentPro, setDepartmentPro] = useState(false);
    const [teachersPro, setTeachersPro] = useState(false);
    const [studentsPro, setstudentsPro] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);

    const userSubmit = (e) => {
        e.preventDefault();
        const { StudentsID, password_1 } = newStudent;
        console.log(StudentsID, password_1)
        if (StudentsID && password_1) {
            axios.post('http://localhost:5000/Singup/login', newStudent)
                .then(res => {
                    if (res.data.error) {
                        console.log('Error:', res.data.error);
                        setVisibleR(true);
                        console.log('hello i am here');
                    }
                    else {
                        sessionStorage.setItem('StudentsID', StudentsID);
                        sessionStorage.setItem('StudentLogin', true);
                        sessionStorage.setItem('Token', res.data.access_token);
                        console.log('Success:', res.data);
                        setstudentsPro(true)


                        setVisible(true);
                        console.log(visible);
                        console.log('i am not here');
                    }
                });
        }

    }

    const AdminLogin = (e) => {
        e.preventDefault();
        const { Department, password_2 } = department;
        if (Department && password_2) {
            axios.post('http://localhost:5000/LoginDepartmentCSE/login', department)
                .then(res => {
                    if (res.data.error) {
                        console.log('Error:', res.data.error);
                        setVisibleR(true);
                        console.log('hello i am here');
                    }
                    else {
                        sessionStorage.setItem('Department', Department);
                        sessionStorage.setItem('DepartmentLogin', true);
                        sessionStorage.setItem('Token', res.data.access_token);
                        console.log('Success:', res.data);
                        setDepartmentPro(true);
                        console.log(departmentPro);
                        setVisible(true);

                        console.log(visible);
                        console.log('i am not here');


                    }
                });
        }
    };
    const TeachersLogin = (e) => {
        e.preventDefault();
        const { name, password } = TeachersInfo;
        if (name && password) {
            axios.post('http://localhost:5000/Teachers/login', TeachersInfo)
                .then(res => {
                    if (res.data.error) {
                        console.log('Error:', res.data.error);
                        setVisibleR(true);
                        console.log('hello i am here');
                    }
                    else {
                        sessionStorage.setItem('Teachers', name);
                        sessionStorage.setItem('TeachersLogin', true);
                        sessionStorage.setItem('Token', res.data.access_token);
                        console.log('Success:', res.data);
                        setTeachersPro(true);
                        console.log(teachersPro)
                        setVisible(true);

                        console.log(visible);
                        console.log('i am not here');


                    }
                });
        }
    };
    const ControlerLogin = (e) => {
        e.preventDefault();
        const { name, password } = ControlerInfo;
        console.log(name, password)
        if (name && password) {
            axios.post('http://localhost:5000/Controler/login', ControlerInfo)
                .then(res => {
                    if (res.data.error) {
                        console.log('Error:', res.data.error);
                        setVisibleR(true);
                        console.log('hello i am here');
                    }
                    else {
                        sessionStorage.setItem('ExamControler', name);
                        sessionStorage.setItem('ExamControler', true);

                        sessionStorage.setItem('Token', res.data.access_token);
                        console.log('Success:', res.data);

                        setControlerPro(true)
                        console.log(Controler)
                        setVisible(true);


                        console.log('i am not here');


                    }
                });
        }
    };
    useEffect(() => {
        if (visible) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1000);

            return () => clearTimeout(timeout);
        }

    }, [visible]);
    useEffect(() => {
        if (visibleR) {
            const timeout = setTimeout(() => {
                setVisibleR(false);

            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [visibleR]);
    let navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            departmentPro && navigate("/DepartmentCSE", { replace: true });
            departmentPro && setAdminlogin(true);

        }, 1500);
    }, [departmentPro, navigate])
    useEffect(() => {

        setTimeout(() => {
            teachersPro && navigate("/TeachersProfile", { replace: true });
            teachersPro && setTeacherslogin(true);

        }, 1500);
    }, [teachersPro, navigate])
    useEffect(() => {
        setTimeout(() => {
            controlerPro && navigate("/ControlerProfile", { replace: true });
            controlerPro && setControler(true);

        }, 1500);
    }, [controlerPro, navigate])
    useEffect(() => {

        setTimeout(() => {
            studentsPro && navigate("/StudentsProfile", { replace: true });
            studentsPro && setLogin(true);

        }, 1500);
    }, [studentsPro, navigate])
    return (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Login Successful


                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? '' : 'hidden'
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Someing Is Wrong Please Try Again


                </div>
            </div>
            <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    class="p-4 py-6  flex items-center justify-center text-white bg-cyan-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >

                    <img src={siubd} alt="" srcset="" />

                </div>
                {(Students && !Teachers && !Admin && !Controller) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Students Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Roll</label>
                            <input
                                type="number"
                                id="StudentsID"
                                name="StudentsID"
                                value={newStudent.StudentsID}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password_1"
                                value={newStudent.password_1}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { seTeachers(true); setStudents(false); setAdmin(false); setController(false); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg
                                            class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" >I am a  teacher</span>
                                </button>
                                <button
                                    href="#"
                                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(true); setController(false); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >Admin</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
                {(!Students && Teachers && !Admin && !Controller && !AccountSection) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Teachers Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autofocus
                                value={TeachersInfo.name}
                                onChange={handleTeachersChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={TeachersInfo.password}
                                onChange={handleTeachersChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={TeachersLogin}
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg
                                            class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white">I am a  Students</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(true); setAccountSection(false); setController(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >Admin</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
                {(!Students && !Teachers && Admin && !Controller && !AccountSection) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Department Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Department Name</label>

                            <select type="text"

                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                id="name"
                                name="Department"
                                value={department.Department}
                                onChange={handleChangeDepartment}
                            >
                                <option value=""></option>
                                <option value="CSE">CSE</option>
                                <option value="BBA">BBA</option>
                                <option value="LLB">LLB</option>
                                <option value="ECE">ECE</option>

                            </select>
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password_2"
                                value={department.password_2}
                                onChange={handleChangeDepartment}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={AdminLogin}
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(true); setAccountSection(false) }}  >
                                    <span>
                                        <svg
                                            class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" >Exam Controller</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setAccountSection(true); setController(false) }} >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >Account Section</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setAccountSection(false); setController(false) }} >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >I am Students</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
                {(!Students && !Teachers && !Admin && Controller && !AccountSection) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Exam Controller Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autofocus
                                value={ControlerInfo.name}
                                onChange={handleControlerChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={ControlerInfo.password}
                                onChange={handleControlerChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={ControlerLogin}
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(false); setAdmin(true) }}
                                >
                                    <span>
                                        <svg
                                            class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white">Department</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setAccountSection(true); setController(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >Account Section</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAdmin(false); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >I am Students</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}
                {(!Students && !Teachers && !Admin && !Controller && AccountSection) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Section Login</h3>
                    <form action="#" class="flex flex-col space-y-5">
                        <div class="flex flex-col space-y-1">
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <div class="flex items-center justify-between">
                                <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div class="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="remember"
                                class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                            />
                            <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Log in
                            </button>
                        </div>
                        <div class="flex flex-col space-y-5">
                            <span class="flex items-center justify-center space-x-2">
                                <span class="h-px bg-gray-400 w-14"></span>
                                <span class="font-normal text-gray-500">or login as a</span>
                                <span class="h-px bg-gray-400 w-14"></span>
                            </span>
                            <div class="flex flex-col space-y-4">
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setController(false); setAdmin(true); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg
                                            class="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            aria-hidden="true"
                                        >
                                            {/* <path
                                                fill-rule="evenodd"
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" >Department</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(true); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >Exam Controller</span>
                                </button>
                                <button
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                    onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAccountSection(false) }}
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" >I am Students</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>}

            </div>

        </div>
    );
};


export default LoginSection;