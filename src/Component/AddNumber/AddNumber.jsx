import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const AddNumber = () => {
    const [Teachers, setTeachers] = useState(false);
    const [loginpage, setLoginpage] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const { course, id, semester, name, registation, credit } = useParams();
    const [number, setNewNumber] = useState({
        Midterm: "",
        Sessional: "",
        Final: "",
        Roll: id,
        CourseHoure: credit,
        CourseCode: course,
        semester: semester,
        name: name,
        registation: registation
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewNumber({
            ...number,
            [name]: value,
        });

    };
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            Midterm,
            Sessional,
            Final
        } = number;

        if (
            Midterm,
            Sessional,
            Final && ((Midterm <= 20 && Midterm >= 0) && (Sessional <= 30 && Sessional >= 0) && (Final <= 50 && Final >= 0))
        ) {
            axios
                .post(
                    "http://localhost:5000/Teachers/Marks",
                    number,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.message === "Marks Added Successfully") {

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
                    Numbers have been added successfully
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
                        Add Numbers
                    </h3>
                    <form action="#" class="flex flex-col space-y-5" method="POST">
                        <div class="flex flex-col space-y-1">
                            <label
                                for="email"
                                class="text-sm font-semibold text-gray-500"
                            >
                                Sessional Number
                            </label>
                            <input
                                type="number"
                                id="StudentsID"
                                name="Sessional"
                                placeholder="The numbers is less than or equal 30 "
                                value={number.Sessional}
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
                                Midterm Number
                            </label>
                            <input
                                type="number"
                                id="StudentsID"
                                name="Midterm"
                                placeholder="The numbers is less than or equal 20"
                                value={number.Midterm}
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
                                Final  Number
                            </label>
                            <input
                                type="number"
                                id="StudentsID"
                                name="Final"
                                placeholder="The numbers is less than or equal 50"
                                value={number.Final}
                                onChange={handleChange}
                                autofocus
                                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                class=" w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4 "
                                onClick={userSubmit}
                            >
                                Add Number
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNumber;