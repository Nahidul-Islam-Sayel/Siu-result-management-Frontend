import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import siubd from '../../asset/Image/SIULOGO.png';
import './Loginsection.css';

const LoginSection = () => {
    const [login, setLogin] = useContext(userContext);
    const [newStudent, setNewStudent] = useState({
        StudentsID: "",
        password_1: ""
    })


    const [Students, setStudents] = useState(true);
    const [Teachers, seTeachers] = useState(false);
    const [Admin, setAdmin] = useState(false);
    const [Controller, setController] = useState(false);
    const [AccountSection, setAccountSection] = useState(false);
    const [LoginSuccessful, setLoginSuccessful] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value,
        })
        console.log(name, value)

    }
    const userSubmit = (e) => {
        e.preventDefault();
        const { StudentsID, password_1 } = newStudent;
        console.log(StudentsID, password_1)
        axios.post('http://localhost:5000/Singup/login', newStudent)
            .then(res => ((res.data.error) ? alert(res.data.error) : (setLoginSuccessful(true), setStudents(false), sessionStorage.setItem('StudentsID', StudentsID), sessionStorage.setItem("Token", res.data.access_token), setLogin(true))));
    }
    useEffect(() => {
        axios.post('http://localhost:5000/Singup/result', sessionStorage.getItem("StudentsID"))
            .then(res => console.log(res));
    }, [])
    return (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            {!LoginSuccessful && <div
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
                            <label for="email" class="text-sm font-semibold text-gray-500">Your Name</label>
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
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
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
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" onClick={() => { seTeachers(true); setStudents(false); setAdmin(false); setController(false); setAccountSection(false) }}>I am a  teacher</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(true); setController(false); setAccountSection(false) }}>Admin</span>
                                </a>
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
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
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
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAccountSection(false) }}>I am a  Students</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(true); setAccountSection(false); setController(false) }}>Admin</span>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>}
                {(!Students && !Teachers && Admin && !Controller && !AccountSection) && <div class="p-5 bg-white md:flex-1">
                    <h3 class="my-4 text-2xl font-semibold text-gray-700">Department Login</h3>
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
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
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
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(true); setAccountSection(false) }}>Exam Controller</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setAccountSection(true); setController(false) }}>Account Section</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setAccountSection(false); setController(false) }}>I am Students</span>
                                </a>
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
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
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
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(false); setAdmin(true) }}>Department</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setAccountSection(true); setController(false) }}>Account Section</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAdmin(false); setAccountSection(false) }}>I am Students</span>
                                </a>
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
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
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
                                    <span class="text-sm font-medium text-gray-800 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setController(false); setAdmin(true); setAccountSection(false) }}>Department</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(false); setAdmin(false); setController(true); setAccountSection(false) }}>Exam Controller</span>
                                </a>
                                <a
                                    href="#"
                                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                                >
                                    <span>
                                        <svg class="text-blue-500 group-hover:text-white" width="20" height="20" fill="currentColor">
                                            {/* <path
                                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                            ></path> */}
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium text-blue-500 group-hover:text-white" onClick={() => { seTeachers(false); setStudents(true); setAdmin(false); setController(false); setAccountSection(false) }}>I am Students</span>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>}

            </div>}
            {
                LoginSuccessful && <div id='card' class="animated fadeIn">
                    <div id='upper-side'>

                        <svg version="1.1" id="checkmark" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" space="preserve">
                            <path d="M131.583,92.152l-0.026-0.041c-0.713-1.118-2.197-1.447-3.316-0.734l-31.782,20.257l-4.74-12.65
                      c-0.483-1.29-1.882-1.958-3.124-1.493l-0.045,0.017c-1.242,0.465-1.857,1.888-1.374,3.178l5.763,15.382
                      c0.131,0.351,0.334,0.65,0.579,0.898c0.028,0.029,0.06,0.052,0.089,0.08c0.08,0.073,0.159,0.147,0.246,0.209
                      c0.071,0.051,0.147,0.091,0.222,0.133c0.058,0.033,0.115,0.069,0.175,0.097c0.081,0.037,0.165,0.063,0.249,0.091
                      c0.065,0.022,0.128,0.047,0.195,0.063c0.079,0.019,0.159,0.026,0.239,0.037c0.074,0.01,0.147,0.024,0.221,0.027
                      c0.097,0.004,0.194-0.006,0.292-0.014c0.055-0.005,0.109-0.003,0.163-0.012c0.323-0.048,0.641-0.16,0.933-0.346l34.305-21.865
                      C131.967,94.755,132.296,93.271,131.583,92.152z" />
                            <circle fill="none" stroke="#ffffff" stroke-width="5" stroke-miterlimit="10" cx="109.486" cy="104.353" r="32.53" />
                        </svg>
                        <h3 id='status'>
                            Success
                        </h3>
                    </div>
                    <div id='lower-side'>
                        <p id='message'>
                            your Are Successfully Login
                        </p>
                        <Link to="/StudentsProfile">      <a href="#" id="contBtn">Profile</a> </Link>
                    </div>
                </div>

            }
        </div>
    );
};

export default LoginSection;