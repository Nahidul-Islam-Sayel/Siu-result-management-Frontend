import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditNumber = () => {
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    const { id } = useParams();
    const [number, setNumber] = useState({
        Midterm: "",
        Sessional: "",
        Final: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNumber((prevNumber) => ({
            ...prevNumber,
            [name]: value,
        }));
    };

    const userSubmit = async (e) => {
        e.preventDefault();
        const { Midterm, Sessional, Final } = number;
        let wrong = false;
        if (Midterm && (Midterm > 20 || Midterm < 0)) wrong = true;
        if (Sessional && (Sessional > 30 || Sessional < 0)) wrong = true;
        if (Final && (Final > 50 || Sessional < 0)) wrong = true;


        if ((Midterm || Sessional || Final) && wrong === false) {
            try {
                const response = await axios.put(
                    `http://localhost:5000/Teachers/EditNumber/${id}`,
                    number,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                        },
                    }
                );

                if (response.data.message === "Updated successfully") {
                    setVisible(true);
                } else {
                    setVisibleR(true);
                }
            } catch (error) {
                setVisibleR(true);
            }
        } else {
            setVisibleR(true);
        }
    };

    let navigate = useNavigate();

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
        <div className="flex items-center min-h-screen p-4 bg-gray-100 justify-center">
            {/* Visible and VisibleR messages */}
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center">
                    Numbers edited successfully
                </div>
            </div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-red-400 text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center">
                    Something went wrong. Please try again.
                </div>
            </div>

            {/* Form */}
            <div className="overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">
                        Edit Number
                    </h3>
                    <form
                        className="flex flex-col space-y-5"
                        onSubmit={userSubmit}
                    >
                        {/* Sessional Number */}
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="sessional"
                                className="text-sm font-semibold text-gray-500"
                            >
                                Sessional Number
                            </label>
                            <input
                                type="number"
                                id="sessional"
                                name="Sessional"
                                placeholder="The number is less than or equal to 30"
                                value={number.Sessional}
                                onChange={handleChange}
                                autoFocus
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        {/* Midterm Number */}
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="midterm"
                                className="text-sm font-semibold text-gray-500"
                            >
                                Midterm Number
                            </label>
                            <input
                                type="number"
                                id="midterm"
                                name="Midterm"
                                placeholder="The number is less than or equal to 20"
                                value={number.Midterm}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        {/* Final Number */}
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="final"
                                className="text-sm font-semibold text-gray-500"
                            >
                                Final Number
                            </label>
                            <input
                                type="number"
                                id="final"
                                name="Final"
                                placeholder="The number is less than or equal to 50"
                                value={number.Final}
                                onChange={handleChange}
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Edit Number
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditNumber;
