import React, { useEffect, useState } from "react";
import img1 from "../../asset/Image/student-icon-01.svg";
import img2 from "../../asset/Image/student-icon-02.svg";
import img3 from "../../asset/Image/teacher-icon-02.svg";
import "./StudentsProfile.css";
const StudentsProfile = () => {
    const [data, setData] = useState();
    const [publisedResult, setPublisedResult] = useState([])
    const [semester1, setSemester1] = useState();
    const [semester2, setSemester2] = useState();
    const [semester3, setSemester3] = useState();
    const [semester4, setSemester4] = useState();
    const [semester5, setSemester5] = useState();
    const [semester6, setSemester6] = useState();
    const [semester7, setSemester7] = useState();
    const [semester8, setSemester8] = useState();
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
    useEffect(() => {
        fetch(
            "http://localhost:5000/Singup/PublisedResult?StudentsID=" +
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
                console.log(res);
                res.forEach((item) => {
                    if (item.semester === "1") {
                        setSemester1(item);
                    } else if (item.semester === "2") {
                        setSemester2(item);
                    } else if (item.semester === "3") {
                        setSemester3(item);
                    } else if (item.semester === "4") {
                        setSemester4(item);
                    } else if (item.semester === "5") {
                        setSemester5(item);
                    } else if (item.semester === "6") {
                        setSemester6(item);
                    } else if (item.semester === "7") {
                        setSemester7(item);
                    } else if (item.semester === "8") {
                        setSemester8(item);
                    } else {

                    }
                });
            });
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
                let filteredResult = res.filter((item) => item.Semester === 1);
                if (filteredResult.length > 0) {
                    setOne(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 2);
                if (filteredResult.length > 0) {
                    setTwo(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 3);
                if (filteredResult.length > 0) {
                    setThree(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 4);
                if (filteredResult.length > 0) {
                    setFour(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 5);
                if (filteredResult.length > 0) {
                    setFive(filteredResult);
                }
                filteredResult = res.filter((item) => item.Seester === 6);
                if (filteredResult.length > 0) {
                    setSix(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 7);
                if (filteredResult.length > 0) {
                    setSeve(filteredResult);
                }
                filteredResult = res.filter((item) => item.Semester === 8);
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
        setEighth(false)
    }
    const handleTwo = () => {
        setFirst(false)
        setScond(true)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEighth(false)
    }
    const handlethree = () => {
        setFirst(false)
        setScond(false)
        setThird(true)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEighth(false)
    }
    const handleTfour = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(true)
        setFifith(false)
        setSixth(false)
        setSeventh(false)
        setEighth(false)
    }
    const handlefive = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(true)
        setSixth(false)
        setSeventh(false)
        setEighth(false)
    }
    const handleSix = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(true)
        setSeventh(false)
        setEighth(false)
    }
    const handleSeven = () => {
        setFirst(false)
        setScond(false)
        setThird(false)
        setFourth(false)
        setFifith(false)
        setSixth(false)
        setSeventh(true)
        setEighth(false)
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

            {data && <body className="mt-32 ml-24 mr-24">
                <h1 className="font-serif font-bold italic text-xl">
                    Welcome {data && data.name} !
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mt-10">
                            <div class="card">
                                <div class="card-body h-28">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={img1} alt="" />
                                        </div>
                                        <div className="col-md-7 ">
                                            <h5 className="font-mono font-bold">Department</h5>
                                            <h1>{data && data.department}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  mt-10">
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
                                            <h1>{data.current_semister}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4  mt-10">
                            <div class="card">
                                <div class="card-body h-28">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={img3} alt="" />
                                        </div>
                                        <div className="col-md-7 ">
                                            <h5 className="font-mono font-bold">Batch</h5>
                                            <h1>{data && data.batch} </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3  mt-10">
                            <div class="card h-28">
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <img src={img4} alt="" />
                                        </div>
                                        <div className="col-md-7 ">
                                            <h5 className="font-mono font-bold">Total CGPA</h5>
                                            <h1></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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

                                    <th scope="col">	Credit Hours</th>
                                    <th scope="col">	Total</th>
                                    <th scope="col">CGPA</th>
                                </tr>
                            </thead>
                            {first && semester1 && <tbody>
                                {one.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}


                            </tbody>}
                            {Second && semester2 && <tbody>
                                {two.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}
                            {Third && semester3 && <tbody>
                                {three.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}
                            {Fourth && semester4 && <tbody>
                                {four.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}
                            {Fifth && semester5 && <tbody>
                                {five.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}
                            {Sixth && semester6
                                && <tbody>
                                    {six.map((res) => (
                                        <tr>
                                            <th>{res.CourseCode}</th>
                                            <td>{res.CourseHoure}</td>
                                            <td>{res.Total}</td>

                                            <td>
                                                {res.Total >= 80 && res.Total <= 100
                                                    ? 4.00
                                                    : res.Total >= 75 && res.Total <= 79
                                                        ? 3.75
                                                        : res.Total >= 70 && res.Total <= 74
                                                            ? 3.50
                                                            : res.Total >= 65 && res.Total <= 69
                                                                ? 3.25
                                                                : res.Total >= 60 && res.Total <= 64
                                                                    ? 3.00
                                                                    : res.Total >= 55 && res.Total <= 59
                                                                        ? 2.75
                                                                        : res.Total >= 50 && res.Total <= 54
                                                                            ? 2.50
                                                                            : res.Total >= 45 && res.Total <= 49
                                                                                ? 2.25
                                                                                : res.Total >= 40 && res.Total <= 44
                                                                                    ? 2.00
                                                                                    : res.Total >= 0 && res.Total <= 39
                                                                                        ? 0.0
                                                                                        : ''}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>}
                            {seventh && semester7 && <tbody>
                                {seven.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}
                            {semester8 && eighth && <tbody>

                                {eight && eight.map((res) => (
                                    <tr>
                                        <th>{res.CourseCode}</th>
                                        <td>{res.CourseHoure}</td>
                                        <td>{res.Total}</td>

                                        <td>
                                            {res.Total >= 80 && res.Total <= 100
                                                ? 4.00
                                                : res.Total >= 75 && res.Total <= 79
                                                    ? 3.75
                                                    : res.Total >= 70 && res.Total <= 74
                                                        ? 3.50
                                                        : res.Total >= 65 && res.Total <= 69
                                                            ? 3.25
                                                            : res.Total >= 60 && res.Total <= 64
                                                                ? 3.00
                                                                : res.Total >= 55 && res.Total <= 59
                                                                    ? 2.75
                                                                    : res.Total >= 50 && res.Total <= 54
                                                                        ? 2.50
                                                                        : res.Total >= 45 && res.Total <= 49
                                                                            ? 2.25
                                                                            : res.Total >= 40 && res.Total <= 44
                                                                                ? 2.00
                                                                                : res.Total >= 0 && res.Total <= 39
                                                                                    ? 0.0
                                                                                    : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>}


                        </table>


                    </div>
                </div>
            </body>
            }
        </>
    );
};

export default StudentsProfile;
