import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import './CourseList.css';
const CourseList = () => {
    const [login, setLogin, Adminlogin, setAdminlogin, CourseName, setCourseName] = useContext(userContext);
    const [oneone, setOneOne] = useState(false);
    const [onetwo, setOneTwo] = useState(false);
    const [twoone, setTwoOne] = useState(false);
    const [twotwo, setTwoTwo] = useState(false);
    const [threeone, setThreeOne] = useState(false);
    const [threetwo, setThreeTwo] = useState(false);
    const [fourone, setFourOne] = useState(false);
    const [fourtwo, setFourTwo] = useState(false);
    const [data, setData] = useState([])
    const [one, setOne] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/LoginDepartmentCSE/AllCourseList', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res =>
                setData(res)
            )
    }, []);
    const semesterOneData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "1");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterTwoData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "2");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterThreeData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "3");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterFourData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "4");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterFiveData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "5");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterSixData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "6");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterSevenData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "7");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const semesterEightData = data.reduce((acc, course) => {
        const semesterOne = course.semester.filter((semesterData) => semesterData.semester === "8");
        if (semesterOne.length > 0) {
            acc.push({ ...course, semester: semesterOne });
        }
        console.log(acc)
        return acc;

    }, []);
    const two = data.filter(item => item.semester === 2);
    const three = data.filter(item => item.semester === 3);
    const four = data.filter(item => item.semester === 4);
    const five = data.filter(item => item.semester === 5);
    const six = data.filter(item => item.semester === 6);
    const seven = data.filter(item => item.semester === 7);
    const eight = data.filter(item => item.semester === 8);
    return (
        <div className="Full-body">
            <div className="bg-cyan-500 h-1400 w-full text-center text-4xl font-serif mt-10" >
                <h1 className="position-relative d-inline-block px-4 py-2 text-white">
                    SYLLABUS
                    <span className="underline"></span>
                </h1>
            </div>
            <div className="">
                <div className="bg-white shadow rounded-lg w-full">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">1st Year: Semester 1</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setOneOne(!oneone)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            {oneone && (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterOneData && semesterOneData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">1st Year: Semester 2</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setOneTwo(!onetwo)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {onetwo &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterTwoData && semesterTwoData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">2nd Year: Semester 1</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setTwoOne(!twoone)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {twoone &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterThreeData && semesterThreeData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">2nd Year: Semester 2</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setTwoTwo(!twotwo)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {twotwo && (
                            <div className="mt-2" x-show="oneOne">
                                <table className="w-full ">
                                    <thead className="border-t text-xl font-mono">
                                        <tr>
                                            <th className="py-2">Course Title</th>
                                            <th className="py-2">Teachers Name</th>
                                            <th className="py-2">Edit</th>
                                            <th className="py-2">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-lg font-semibold">
                                        {semesterFourData && semesterFourData.map((course, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="py-2">{course.courseName}</td>
                                                    <td className="py-2">{course.teachersName}</td>

                                                    <td className="py-2">


                                                        <Link to={course._id} >  <td className="py-2">
                                                            Edit</td></Link>

                                                    </td>
                                                    <td className="py-2">

                                                        <Link to={`/DeleteCourse/${course._id}`}>
                                                            <td className="py-2">Delete</td>
                                                        </Link>

                                                    </td>

                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">3rd Year: Semester 1</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setThreeOne(!threeone)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {threeone &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterFiveData && semesterFiveData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">3rd Year: Semester 2</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setThreeTwo(!threetwo)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {threetwo &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterSixData && semesterSixData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">4th Year: Semester 1</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setFourOne(!fourone)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {fourone &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterSevenData && semesterSevenData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <h5 className="text-lg font-semibold">4th Year: Semester 2</h5>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setFourTwo(!fourtwo)}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                        {fourtwo &&
                            (
                                <div className="mt-2" x-show="oneOne">
                                    <table className="w-full ">
                                        <thead className="border-t text-xl font-mono">
                                            <tr>
                                                <th className="py-2">Course Title</th>
                                                <th className="py-2">Teachers Name</th>
                                                <th className="py-2">Edit</th>
                                                <th className="py-2">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-lg font-semibold">
                                            {semesterEightData && semesterEightData.map((course, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="py-2">{course.courseName}</td>
                                                        <td className="py-2">{course.teachersName}</td>

                                                        <td className="py-2">


                                                            <Link to={course._id} >  <td className="py-2">
                                                                Edit</td></Link>

                                                        </td>
                                                        <td className="py-2">

                                                            <Link to={`/DeleteCourse/${course._id}`}>
                                                                <td className="py-2">Delete</td>
                                                            </Link>

                                                        </td>

                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default CourseList;