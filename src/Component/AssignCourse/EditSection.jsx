import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './AssingCource.css';
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Edit = () => {

    const [Regular, setRegular] = useState(true);
    const [allTeacher, setallTeacher] = useState([]);
    const [allCourses, setallCourses] = useState([]);
    const [RetakeReffred, setRetakeReffred] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        email: "",
        semesters: [{ semester: "", batch: "" }],
        Department: sessionStorage.getItem("Department"),
        Roll_Number: "",
        Registration_Number: "",
        password_1: "",
        password_2: "",
    });
    const [newAssignCourses, setnewAssignCourses] = useState({
        TeachersName: "",
        CourseName: "",
        Department: sessionStorage.getItem("Department"),
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewAssignCourses((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const { id } = useParams();
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            TeachersName


        } = newAssignCourses;

        const isValidForm =
            TeachersName

        if (isValidForm) {
            axios
                .put(
                    `http://localhost:5000/LoginDepartmentCSE/EditCourse/${id}`,
                    newAssignCourses,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Todo was updated successfully!") {
                        setVisible(true);
                    } else {
                        setVisibleR(true);
                    }
                });
        } else {
            setVisibleR(true);
        }
    };




    useEffect(() => {
        fetch('http://localhost:5000/LoginDepartmentCSE/AllTeachers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res =>
                setallTeacher(res)
            )
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/LoginDepartmentCSE/AllCourse', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res =>
                setallCourses(res)
            )
    }, []);

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
                    Update Successful
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Something Is Wrong. Please Try Again
                </div>
            </div>
            <div class=" overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <>
                    {!RetakeReffred && Regular && (
                        <div class="p-5 bg-white md:flex-1">
                            <h3 class="my-4 text-2xl font-semibold text-gray-700">
                                Edit Course Teachers
                            </h3>
                            <form action="#" class="flex flex-col space-y-5" method="POST">
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Teachers Name
                                    </label>
                                    <select
                                        name="TeachersName"
                                        value={newAssignCourses.TeachersName}
                                        onChange={handleChange}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        {allTeacher.length > 0 && allTeacher.map((data) => (
                                            <option value={data.name}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>


                                <div class="flex justify-between">

                                    <button
                                        type="submit"
                                        class="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={userSubmit}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div>

                                </div>
                            </form>
                        </div>
                    )}

                </>
            </div>
        </div>
    );
};

export default Edit;
