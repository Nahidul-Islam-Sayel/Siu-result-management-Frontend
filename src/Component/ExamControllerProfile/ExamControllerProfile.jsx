import { Line } from 'rc-progress';
import React, { useEffect, useState } from "react";
import PieChart from 'react-pie-graph-chart';
import { Link } from 'react-router-dom';
import Profile from '../../asset/Image/SIULOGO.png';
const ExamControllerProfile = () => {
    const [teachersBackground, setTeachersBackground] = useState([]);
    const [Course, setCourse] = useState([]);
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
            "http://localhost:5000/Controler/AllResult",
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
            "http://localhost:5000/Controler/Students",
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
                let filteredResult = res.filter((item) => item.current_semister === 1);
                if (filteredResult.length > 0) {
                    setOne(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 2);
                if (filteredResult.length > 0) {
                    setTwo(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 3);
                if (filteredResult.length > 0) {
                    setThree(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 4);
                if (filteredResult.length > 0) {
                    setFour(filteredResult);
                    filteredResult.map(res => console.log(res))
                }
                filteredResult = res.filter((item) => item.current_semister === 5);
                if (filteredResult.length > 0) {
                    setFive(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 6);
                if (filteredResult.length > 0) {
                    setSix(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 7);
                if (filteredResult.length > 0) {
                    setSeve(filteredResult);
                }
                filteredResult = res.filter((item) => item.current_semister === 8);
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
        <div className="container mt-5 mb-10">
            <div className="row">
                <div class="col-md-4 mb-3 xyz">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src={Profile} alt="Admin" class="rounded-circle" width="100" />
                                <div class="mt-3">
                                    <h4 className='text-2xl font-serif'></h4>
                                    <h4 className='text-xl font-serif'></h4>
                                    <h4 className='text-xl font-serif'>Exam Controler </h4>
                                    <p class="text-3xl font-serif"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <ul class="list-group list-group-flush">
                            {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"></h6>
                                <span class="text-secondary"></span>
                            </li> */}
                            {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>
                                    </div>
                                </div>
                            </li> */}
                            {/* <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <form action="" encType="multipart/form-data">
                                                <input type="file" name="avater" id="" placeholder='Please Upload Your File' />
                                                <input type="submit" value="submit" name="submit" placeholder='submit' />
                                            </form>
                                        </div>
                                    </div>
                                </li> */}
                        </ul>
                    </div>

                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card text-white bg-info" >
                                <div class="card-header">Total Assign Course</div>
                                <div class="card-body">
                                    <h5 class="card-title">{ }</h5>
                                    <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card text-white  bg-secondary" >
                                <div class="card-header">Total Students</div>
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text"><img src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png" alt="" /></p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className="col-md-7">
                            <h5>Regular</h5>
                            <Line percent="" strokeWidth={2} strokeColor="#E97D30" />
                            <h5>Retake</h5>
                            <Line percent="" strokeWidth={2} strokeColor="#62B170" />

                        </div>
                        <div className="col-md-5">
                            <PieChart data={[
                                {
                                    type: "Regular",
                                    value: 10,
                                    color: "#E97D30"
                                },
                                {
                                    type: "Retake",
                                    value: 10,
                                    color: "#62B170"
                                }
                            ]} />
                        </div>
                    </div>



                </div>
            </div>
            <div class="card text-center mt-20">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a className="nav-link active btn" href="#" onClick={handleOne}>
                                1/1
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link active btn" href="#" onClick={handleTwo}>
                                1/2
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handlethree}>
                                2/1
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handleTfour}>
                                2/2
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handlefive}>
                                3/1
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handleSix}>
                                3/2
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handleSeven}>
                                4/1
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link active  btn" href="#" onClick={handleEight}>
                                4/2
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>

                                <th scope="col">Roll</th>
                                <th scope="col">Registration</th>
                                <th scope="col">Batch</th>
                                <th scope="col">View Result</th>
                            </tr>
                        </thead>
                        {first && <tbody>
                            {one.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}


                        </tbody>}
                        {Second && <tbody>
                            {two.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}
                        {Third && <tbody>
                            {three.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}
                        {Fourth && <tbody>
                            {four.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}
                        {Fifth && <tbody>
                            {five.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}
                        {Sixth
                            && <tbody>
                                {six.map((res) => (
                                    <tr>
                                        <th>{res.name}</th>
                                        <td>{res.roll}</td>
                                        <td>{res.registration_number}</td>
                                        <td>{res.batch}</td>
                                        <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                    </tr>
                                ))}
                            </tbody>}
                        {seventh && <tbody>
                            {seven.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}
                        {eighth && <tbody>
                            {eight.map((res) => (
                                <tr>
                                    <th>{res.name}</th>
                                    <td>{res.roll}</td>
                                    <td>{res.registration_number}</td>
                                    <td>{res.batch}</td>
                                    <td>        <Link to={`/viewResult/${res.current_semister}/${res.roll}`}>  View Result</Link></td>
                                </tr>
                            ))}
                        </tbody>}


                    </table>


                </div>
            </div>
        </div>
    );
};

export default ExamControllerProfile;