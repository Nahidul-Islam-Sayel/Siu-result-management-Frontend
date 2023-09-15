import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const ViewResult = () => {
    let sum = 1;
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const { roll } = useParams();
    const [visible, setVisible] = useState(false);
    const [visibleR, setVisibleR] = useState(false);
    console.log(roll)
    const [publisedResult, setPublisedResult] = useState({
        name: "",
        roll: "",
        reg: "",
        semester: "",
        publisedResult: "",
    });
    useEffect(() => {
        fetch(`http://localhost:5000/Controler/AllResult?roll=${roll}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setResult(res))
    }, []);

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
    const [publisedResulted, setPublisedResulted] = useState({
        name: "",
        roll: "",
        reg: "",
        semester: ""
    });


    const PublisedResult = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:5000/Controler/PublisedResult",
                result,
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                    },
                }
            )
            .then((res) => {
                if (res.data.message === "Result Publised successful!") {

                    setVisible(true);
                } else {
                    console.log(res.data.message)
                    setVisibleR(true);
                }
            });

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
        <div>
            <div
                className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
                    }`}
            >
                <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
                    Successfully Publised Result
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
            <div className="container">
                <div className="mt-10 mb-10 font-black text-xl font-mono">
                    <h1>Name: {result[0] && result[0].Name}   </h1>
                    <h1>Roll:  {result[0] && result[0].Roll}  </h1>
                    <h1>Registration:  {result[0] && result[0].Reg}     </h1>
                    <h1>Semster: {result[0] && result[0].Semester}   </h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Credit Hours</th>
                            <th scope="col">Sessional</th>
                            <th scope="col">Mid Term</th>
                            <th scope="col">Final</th>
                            <th scope="col">Total</th>
                            <th scope="col">CGPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result && result.map(result =>
                        (<tr>
                            <td>{result.CourseCode}</td>
                            <td>{result.CourseHoure}</td>
                            <td>{result.Sessional}</td>
                            <td>{result.Midterm}</td>
                            <td>{result.Final}</td>
                            <td>{result.Total}</td>
                            <td>
                                {result.Total >= 80 && result.Total <= 100
                                    ? 4.00
                                    : result.Total >= 75 && result.Total <= 79
                                        ? 3.75
                                        : result.Total >= 70 && result.Total <= 74
                                            ? 3.50
                                            : result.Total >= 65 && result.Total <= 69
                                                ? 3.25
                                                : result.Total >= 60 && result.Total <= 64
                                                    ? 3.00
                                                    : result.Total >= 55 && result.Total <= 59
                                                        ? 2.75
                                                        : result.Total >= 50 && result.Total <= 54
                                                            ? 2.50
                                                            : result.Total >= 45 && result.Total <= 49
                                                                ? 2.25
                                                                : result.Total >= 40 && result.Total <= 44
                                                                    ? 2.00
                                                                    : result.Total >= 0 && result.Total <= 39
                                                                        ? 0.0
                                                                        : ''}
                            </td>

                        </tr>)

                        )}
                    </tbody>
                </table>
                <button type="button" class="btn btn-outline-success mb-20" onClick={PublisedResult}>Published Result</button>
            </div>
        </div>
    );
};

export default ViewResult;
