import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const AddCourse = () => {
    const [Teachers, setTeachers] = useState(false);
    const [loginpage, setLoginpage] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);

    const [newCourse, setNewCourse] = useState({
        CourseName: "",
        CourseTitle: "",
        CreditHours: "",
        semister: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({
            ...newCourse,
            [name]: value,
        });

    };
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            CourseName,
            CourseTitle,
            CreditHours
        } = newCourse;

        if (
            CourseName,
            CourseTitle,
            CreditHours
        ) {
            axios
                .post(
                    "http://localhost:5000/LoginDepartmentCSE/AddCourse",
                    newCourse,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Course add successful!") {

                        setVisible(true);
                    } else {

                        setVisibleR(true);
                    }
                });
        } else setVisibleR(true);
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
                    Course Add Sucessfully
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
                                Course Title
                            </label>
                            <input
                                type="text"
                                id="StudentsID"
                                name="CourseName"
                                placeholder="Course Name"
                                value={newCourse.CourseName}
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
                                CourseTitle
                            </label>
                            <input
                                type="email"
                                name="CourseTitle"
                                placeholder="Course Title "
                                value={newCourse.CourseTitle}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>{" "}
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Credit Hours
                            </label>
                            <input
                                type="text"
                                name="CreditHours"
                                placeholder="Credit Hours"
                                value={newCourse.CreditHours}
                                onChange={handleChange}
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Semester
                            </label>

                            <select
                                type="number"
                                name="semister"
                                placeholder="semister"
                                value={newCourse.semister}
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



                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                onClick={userSubmit}
                            >
                                Register
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;