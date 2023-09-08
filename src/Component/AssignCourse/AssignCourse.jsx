import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { userContext } from '../../App';
import './AssingCource.css';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const AssignCourse = () => {
    const [login, setLogin, Adminlogin, setAdminlogin, AssignTechers, setAssignTechers] = useContext(userContext);
    const [Regular, setRegular] = useState(true);
    const [allTeacher, setallTeacher] = useState([]);
    const [allCourses, setallCourses] = useState([]);
    const [RetakeReffred, setRetakeReffred] = useState(false);
    const [visible, setVisible] = useState(false);
    const [courseData, setCourseData] = useState([]);
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
        courseHoure: "",
        semesters: [{ semester: "", batch: "" }],
        Department: sessionStorage.getItem("Department"),
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        let selectedCourse;
        if (name === "CourseName") {
            selectedCourse = courseData.find(course => course.CourseName === value);
            console.log(selectedCourse.CreditHours)
            setnewAssignCourses((prevState) => ({
                ...prevState,
                "courseHoure": selectedCourse.CreditHours
            }));
        }
        setnewAssignCourses((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChanger = (e) => {
        const { name, value } = e.target;
        setnewAssignCourses((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSemesterChange = (index, e) => {
        const { name, value } = e.target;
        setnewAssignCourses((prevState) => {
            const updatedSemesters = [...prevState.semesters];
            updatedSemesters[index][name] = value;
            return {
                ...prevState,
                semesters: updatedSemesters,
            };
        });
    };
    const [newRetkeReffrede, setnewRetkeReffrede] = useState({
        TeachersName: "",
        CourseName: "",
        semesters: [{ semester: "", batch: "", roll: "", registration: "", retakeReferral: "" }],
        Department: sessionStorage.getItem("Department"),
    });
    const handleChangeRetakeReffred = (e) => {
        const { name, value } = e.target;
        setnewRetkeReffrede((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSemesterChangeRetakeReffred = (index, e) => {
        const { name, value } = e.target;
        setnewRetkeReffrede((prevState) => {
            const updatedSemesters = [...prevState.semesters];
            updatedSemesters[index][name] = value;
            return {
                ...prevState,
                semesters: updatedSemesters,
            };
        });
    };
    const addSemester = () => {
        setnewAssignCourses((prevState) => ({
            ...prevState,
            semesters: [...prevState.semesters, { semester: "", batch: "" }],
        }));
    };
    const addRetakeReffred = () => {
        setnewRetkeReffrede((prevState) => ({
            ...prevState,
            semesters: [...prevState.semesters, { semester: "", batch: "", roll: "", registration: "", retakeReferral: "" }],
        }));
    };

    const userSubmit = (e) => {
        e.preventDefault();

        const {
            TeachersName,
            CourseName,
            semesters,
        } = newAssignCourses;

        const isValidForm =
            TeachersName &&
            CourseName &&
            semesters.every((semester) => semester.semester && semester.batch);

        if (isValidForm) {
            axios
                .post(
                    "http://localhost:5000/LoginDepartmentCSE/AssignCourse",
                    newAssignCourses,
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
                        console.log(res.data.message);
                        setVisibleR(true);
                    }
                });
        } else {
            setVisibleR(true);
        }
    };

    const RetakeReffredSubmit = (e) => {
        e.preventDefault();

        const { TeachersName, CourseName, semesters } = newRetkeReffrede;

        const isValidForm =
            TeachersName &&
            CourseName &&
            semesters.every(
                (semester) =>
                    semester.semester &&
                    semester.batch &&
                    semester.roll &&
                    semester.registration &&
                    semester.retakeReferral
            );

        if (isValidForm) {
            axios
                .post("http://localhost:5000/LoginDepartmentCSE/AssignRetakeCourse", newRetkeReffrede, {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                    },
                })
                .then((res) => {
                    if (res.data.message === "Signup was successful!") {
                        setVisible(true);
                    } else {
                        console.log(res.data.message);
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
            .then(res => {
                setallCourses(res);
                setCourseData(res);
            }
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
                    Course Add Successful
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
                                Assign Course
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
                                <div class="flex flex-col space-y-1">
                                    <label
                                        for="email"
                                        class="text-sm font-semibold text-gray-500"
                                    >
                                        Course List
                                    </label>
                                    <select
                                        name="CourseName"
                                        value={newAssignCourses.CourseName}
                                        onChange={handleChange}
                                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        {allCourses.length > 0 && allCourses.map((data) => (
                                            <option value={data.CourseName}>{data.CourseName} {data.CourseTitle}</option>
                                        ))}
                                    </select>
                                </div>
                                {newAssignCourses.semesters.map((semester, index) => (
                                    <div key={index} class="flex flex-col space-y-1">
                                        <label
                                            for="email"
                                            class="text-sm font-semibold text-gray-500"
                                        >
                                            Semester
                                        </label>
                                        <select
                                            name="semester"
                                            value={semester.semester}
                                            onChange={(e) => handleSemesterChange(index, e)}
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
                                            value={semester.batch}
                                            onChange={(e) => handleSemesterChange(index, e)}
                                            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        />
                                    </div>
                                ))}
                                <div class="flex justify-between">
                                    <button
                                        type="button"
                                        class="px-4 py-2 text-sm font-semibold text-gray-500 transition-colors duration-300 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={addSemester}
                                    >
                                        Add Semester
                                    </button>
                                    <button
                                        type="submit"
                                        class="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
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
                                            setRetakeReffred(true);
                                            setRegular(false);
                                        }}
                                    >
                                        For Retake/Reffrerd Students
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {RetakeReffred && !Regular && (
                        <div className="p-5 bg-white md:flex-1">
                            <h3 className="my-4 text-2xl font-semibold text-gray-700">
                                Add Retake/Reffred
                            </h3>
                            <form action="#" className="flex flex-col space-y-5" method="POST">
                                <div className="flex flex-col space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Teachers Name
                                    </label>
                                    <select
                                        name="TeachersName"
                                        value={newRetkeReffrede.TeachersName}
                                        onChange={handleChangeRetakeReffred}
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        {allTeacher.length > 0 && allTeacher.map((data) => (
                                            <option value={data.name}>{data.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-500"
                                    >
                                        Course Name
                                    </label>
                                    <select
                                        name="CourseName"
                                        value={newRetkeReffrede.CourseName}
                                        onChange={handleChangeRetakeReffred}
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    >
                                        <option value=""></option>
                                        {allCourses.length > 0 && allCourses.map((data) => (
                                            <option value={data.CourseName}>{data.CourseName} {data.CourseTitle}</option>
                                        ))}
                                    </select>
                                </div>
                                {newRetkeReffrede.semesters.map((semester, index) => (
                                    <div key={index} className="flex flex-col space-y-1">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-semibold text-gray-500"
                                        >
                                            Semester
                                        </label>
                                        <select
                                            name="semester"
                                            value={semester.semester}
                                            onChange={(e) => handleSemesterChangeRetakeReffred(index, e)}
                                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-semibold text-gray-500"
                                        >
                                            Batch
                                        </label>
                                        <input
                                            type="number"
                                            name="batch"
                                            placeholder="Batch"
                                            value={semester.batch}
                                            onChange={(e) => handleSemesterChangeRetakeReffred(index, e)}
                                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-semibold text-gray-500"
                                        >
                                            Roll Number
                                        </label>
                                        <input
                                            type="text"
                                            name="roll"
                                            placeholder="Roll Number"
                                            value={semester.roll}
                                            onChange={(e) => handleSemesterChangeRetakeReffred(index, e)}
                                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-semibold text-gray-500"
                                        >
                                            Registration Number
                                        </label>
                                        <input
                                            type="text"
                                            name="registration"
                                            placeholder="Registration Number"
                                            value={semester.registration}
                                            onChange={(e) => handleSemesterChangeRetakeReffred(index, e)}
                                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-semibold text-gray-500"
                                        >
                                            Retake/Referral
                                        </label>
                                        <select
                                            name="retakeReferral"
                                            value={semester.retakeReferral}
                                            onChange={(e) => handleSemesterChangeRetakeReffred(index, e)}
                                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        >
                                            <option value=""></option>
                                            <option value="retake">Retake</option>
                                            <option value="reffered">reffered</option>
                                        </select>
                                    </div>
                                ))}
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        className="px-4 py-2 text-sm font-semibold text-gray-500 transition-colors duration-300 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={addRetakeReffred}
                                    >
                                        Add Student
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={RetakeReffredSubmit}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={() => {
                                            setRetakeReffred(false);
                                            setRegular(true);
                                        }}
                                    >
                                        Regular Students
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

export default AssignCourse;
