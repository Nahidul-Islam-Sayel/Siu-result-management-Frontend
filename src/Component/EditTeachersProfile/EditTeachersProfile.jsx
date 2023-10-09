import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const EditTeachersProfile = () => {
    const [visible, setVisible] = useState(false);
    const [newTeachers, setNewTeachers] = useState({

        Department: sessionStorage.getItem("Department"),
        position: ""

    });
    const [visibleR, setVisibleR] = useState(false);
    const handleTeachers = (e) => {
        const { name, value } = e.target;
        setNewTeachers({
            ...newTeachers,
            [name]: value,
        });
    };
    const { id } = useParams();
    const userSubmit = (e) => {
        e.preventDefault();
        const {
            position
        } = newTeachers;
        const isValidForm = position
        if (isValidForm) {
            axios
                .put(
                    `http://localhost:5000/LoginDepartmentCSE/EditTeachers/${id}`,
                    newTeachers,
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

                    <div class="p-5 bg-white md:flex-1">
                        <h3 class="my-4 text-2xl font-semibold text-gray-700">
                            Update Teachers Profile
                        </h3>
                        <form action="#" class="flex flex-col space-y-5" method="POST">
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


                            <div class="flex justify-between">

                                <button
                                    type="submit"
                                    class="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                    onClick={userSubmit}
                                >
                                    Update
                                </button>
                            </div>
                            <div>

                            </div>
                        </form>
                    </div>


                </>
            </div>
        </div>
    );
};

export default EditTeachersProfile;