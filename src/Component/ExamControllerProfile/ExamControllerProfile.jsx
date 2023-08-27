import React, { useEffect, useState } from "react";
import img1 from "../../asset/Image/student-icon-01.svg";
import img2 from "../../asset/Image/student-icon-02.svg";
import img4 from "../../asset/Image/teacher-icon-01.svg";
import img3 from "../../asset/Image/teacher-icon-02.svg";
const ExamControllerProfile = () => {
    const [data, setData] = useState();
    let OneOne = [];
    let [result, setResult] = useState([]);
    const [one, setOne] = useState([]);
    const [two, setTwo] = useState([]);
    const [three, setThree] = useState([]);
    const [four, setFour] = useState([]);
    const [five, setFive] = useState([]);
    const [six, setSix] = useState([]);
    const [seven, setSeve] = useState([]);
    const [eight, setEight] = useState([]);

    const [first, setFirst] = useState(true);
    const [Second, setScond] = useState(false);
    const [Third, setThird] = useState(false);
    const [Fourth, setFourth] = useState(false);
    const [Fifth, setFifith] = useState(false);
    const [Sixth, setSixth] = useState(false);
    const [seventh, setSeventh] = useState(false);
    const [eighth, setEighth] = useState(false);

    useEffect(() => {
        fetch(
            "http://localhost:5000/Singup/Profile?StudentsID=" +
            sessionStorage.getItem("StudentsID"),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);
    let sum = 0;
    useEffect(() => {
        fetch(
            "http://localhost:5000/Singup/result?StudentsID=" +
            sessionStorage.getItem("StudentsID"),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                let filteredResult = res.filter((item) => item.Semister === "1");
                if (filteredResult.length > 0) {
                    setOne(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "2");
                if (filteredResult.length > 0) {
                    setTwo(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "3");
                if (filteredResult.length > 0) {
                    setThree(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "4");
                if (filteredResult.length > 0) {
                    setFour(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "5");
                if (filteredResult.length > 0) {
                    setFive(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "6");
                if (filteredResult.length > 0) {
                    setSix(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "7");
                if (filteredResult.length > 0) {
                    setSeve(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semister === "8");
                if (filteredResult.length > 0) {
                    setEight(filteredResult);
                }
            });

    }, []);
    const handleOne = () => {
        setFirst(true)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEight(false)
    }
    const handleTwo = () => {
        setFirst(false)
        setScond(true)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEight(false)
    }
    const handlethree = () => {
        setFirst(false)
        setScond(false)
        setThird(true)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEight(false)
    }
    const handleTfour = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(true)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEight(false)
    }
    const handlefive = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(true)
        setSixth(false)
        setSeventh(false)
        setEight(false)
    }
    const handleSix = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(true)
        setSeventh(false)
        setEight(false)
    }
    const handleSeven = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(true)
        setEight(false)
    }
    const handleEight = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEighth(true)
    }
    return (
        <>
            {data && (
                <body className="mt-32 ml-24 mr-24">
                    <h1 className="font-serif font-bold italic text-xl">
                        Welcome {data.username} !
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3  mt-10">
                                <div class="card">
                                    <div class="card-body h-28">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={img1} alt="" />
                                            </div>
                                            <div className="col-md-7 ">
                                                <h5 className="font-mono font-bold">Department</h5>
                                                <h1>CSE</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  mt-10">
                                <div class="card">
                                    <div class="card-body h-28">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className="col-md-7 ">
                                                <h5 className="font-mono font-bold">
                                                    Current Semister
                                                </h5>
                                                <h1>8</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  mt-10">
                                <div class="card">
                                    <div class="card-body h-28">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={img3} alt="" />
                                            </div>
                                            <div className="col-md-7 ">
                                                <h5 className="font-mono font-bold">Batch</h5>
                                                <h1>{data.batch}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  mt-10">
                                <div class="card h-28">
                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img src={img4} alt="" />
                                            </div>
                                            <div className="col-md-7 ">
                                                <h5 className="font-mono font-bold">Total CGPA</h5>
                                                <h1>{data.CGPA}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card text-center mt-20">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active btn" href="#" onClick={handleOne}>
                                        1/1
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link active btn" href="#" onClick={handleTwo}>
                                        1/2
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handlethree}>
                                        2/1
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handleTfour}>
                                        2/2
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handlefive}>
                                        3/1
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handleSix}>
                                        3/2
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handleSeven}>
                                        4/1
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active  btn" href="#" onClick={handleEight}>
                                        4/2
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">

                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Course Code</th>

                                        <th scope="col">Credit</th>
                                        <th scope="col">CGPA</th>
                                    </tr>
                                </thead>
                                {first && <tbody>
                                    {one.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>

                                        </tr>
                                    ))}


                                </tbody>}
                                {Second && <tbody>
                                    {two.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                                {Third && <tbody>
                                    {three.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                                {Fourth && <tbody>
                                    {four.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                                {Fifth && <tbody>
                                    {five.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                                {Sixth
                                    && <tbody>
                                        {six.map((res) => (
                                            <tr>
                                                <th>{res.Course}</th>
                                                <td>{res.Credit}</td>
                                                <td>{res.CGPA}</td>
                                            </tr>
                                        ))}
                                    </tbody>}
                                {seventh && <tbody>
                                    {seven.map((res) => (
                                        <tr>
                                            <th>{res.Course}</th>
                                            <td>{res.Credit}</td>
                                            <td>{res.CGPA}</td>
                                        </tr>
                                    ))}
                                </tbody>}
                                {eighth && <tbody>

                                    <tr>

                                    </tr>

                                </tbody>}


                            </table>


                        </div>
                    </div>
                </body>
            )}
        </>
    );
};

export default ExamControllerProfile;