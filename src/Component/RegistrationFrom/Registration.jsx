import axios from "axios";
import * as EmailValidator from 'email-validator';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const Registration = () => {
    const [Teachers, setTeachers] = useState(false);
    const [loginpage, setLoginpage] = useState(false);
    const [user, setUser] = useState(true);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        batch: "",
        current_semister: "",
        Department: sessionStorage.getItem("Department"),
        Roll_Number: "",
        Registration_Number: "",
        password_1: "",
        password_2: "",
    });
    const [newTeachers, setNewTeachers] = useState({
        name: "",
        username: "",
        email: "",
        Department: sessionStorage.getItem("Department"),
        position: "",
        password_1: "",
        password_2: "",
    });
    const handleTeachers = (e) => {
        const { name, value } = e.target;
        setNewTeachers({
            ...newTeachers,
            [name]: value,
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value,
        });

    };
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            name,
            username,
            email,
            batch,
            current_semister,
            Roll_Number,
            Registration_Number,
            password_1,
            password_2,
        } = newUser;

        if (
            name &&
            username &&
            email &&
            batch &&
            current_semister &&
            Registration_Number &&
            Roll_Number &&
            password_1 &&
            EmailValidator.validate(email) &&
            password_2 &&
            password_1 === password_2 &&
            password_1 >= 6
        ) {
            axios
                .post(
                    "http://localhost:5000/LoginDepartmentCSE/StudentsRegistration",
                    newUser,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Signup was successful!") {

                        setVisible(true);
                    } else {

                        setVisibleR(true);
                    }
                });
        } else setVisibleR(true);
        // else if (!regex.test(email)) alert("email is invalid");
        // else if (password_1 !== password_2)
        //   alert("password 1 & password 2 does not match");
        // else if (password_1 <= 6) alert("password lenght must be greater then 6");
        // else alert("Invalid input");
    };
    const TeachersSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            username,
            email,
            position,
            password_1,
            password_2,
        } = newTeachers;

        if (
            name &&
            username &&
            email &&
            position &&
            password_1 &&
            regex.test(email) &&
            password_2 &&
            password_1 === password_2 &&
            password_1 >= 6
        ) {
            axios
                .post(
                    "http://localhost:5000/LoginDepartmentCSE/TeachersRegistration",
                    newTeachers,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Signup was successful!") {
                        setVisible(true);
                    } else {

                        setVisibleR(true);
                    }
                });
        }
        // else if (!regex.test(email)) alert("email is invalid");
        // else if (password_1 !== password_2)
        //     alert("password 1 & password 2 does not match");
        // else if (password_1 <= 6) alert("password lenght must be greater then 6");
        // else alert("Invalid input");
    };
    let navigate = useNavigate();
    useEffect(() => {
        loginpage && alert("Sing up Successful");
        loginpage && navigate("/login", { replace: true });
    }, [loginpage]);
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
    return (
        <div class="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Registration Successful
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Someing Is Wrong Please Try Again
                </div>
            </div>
            <div class=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <>
                    {user && !Teachers && (
                        <div class="p-5 bg-white md:flex-1">
                            <h3 class="my-4 text-2xl font-semibold text-gray-700">
                                Create Student's Profile
                            </h3>
                            <form action="#" class="flex flex-col space-y-5" method="POST">
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Student Name
                                    </label>
                                    <input
                                        type="text"
                                        id="StudentsID"
                                        name="name"
                                        placeholder="Student Name "
                                        value={newUser.name}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email "
                                        value={newUser.email}
                                        onChange={handleChange}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>{" "}
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username "
                                        value={newUser.username}
                                        onChange={handleChange}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Batch
                                    </label>
                                    <input
                                        type="number"
                                        name="batch"
                                        placeholder="Batch"
                                        value={newUser.batch}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Current Semester
                                    </label>

                                    <select
                                        type="number"
                                        name="current_semister"
                                        placeholder="Current Semister"
                                        value={newUser.current_semister}
                                        onChange={handleChange}

                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </div>

                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Roll Number
                                    </label>
                                    <input
                                        type="number"
                                        name="Roll_Number"
                                        placeholder="Roll Number"
                                        value={newUser.Roll_Number}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Registration Number
                                    </label>
                                    <input
                                        type="number"
                                        name="Registration_Number"
                                        placeholder="Registration Number"
                                        value={newUser.Registration_Number}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password_1"
                                        placeholder="Password must be greater than 6 digits"
                                        value={newUser.password_1}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password_2"
                                        placeholder="Confirm Password"
                                        value={newUser.password_2}
                                        onChange={handleChange}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={userSubmit}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={() => {
                                            setTeachers(true);
                                            setUser(false);
                                        }}
                                    >
                                        Create Teachers Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </>
                <>
                    {!user && Teachers && (
                        <div class="p-5 bg-white md:flex-1">
                            <h3 class="my-4 text-2xl font-semibold text-gray-700">
                                Create Teacher's Profile
                            </h3>
                            <form action="#" class="flex flex-col space-y-5" method="POST">
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Teacher's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="StudentsID"
                                        name="name"
                                        placeholder="Teacher's Name"
                                        value={newTeachers.name}
                                        onChange={handleTeachers}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email "
                                        value={newTeachers.email}
                                        onChange={handleTeachers}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>{" "}
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username "
                                        value={newTeachers.username}
                                        onChange={handleTeachers}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Position
                                    </label>

                                    <select
                                        type="text"
                                        name="position"
                                        placeholder="Positon"
                                        value={newTeachers.position}
                                        onChange={handleTeachers}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        <option value="Advisor">Advisor</option>
                                        <option value="Associate Professor">Associate Professor</option>
                                        <option value="Assistant Professor"> Assistant Professor</option>
                                        <option value="Lecturer">Lecturer</option>
                                        <option value="Teaching Assistant">Teaching Assistant</option>

                                    </select>
                                </div>

                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password_1"
                                        placeholder="Password must be greater than 6 digits"
                                        value={newTeachers.password_1}
                                        onChange={handleTeachers}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password_2"
                                        placeholder="Confirm Password"
                                        value={newTeachers.password_2}
                                        onChange={handleTeachers}
                                        autofocus
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={TeachersSubmit}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={() => {
                                            setTeachers(false);
                                            setUser(true);
                                        }}
                                    >
                                        Create Student Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
};

export default Registration;
