import { Line } from 'rc-progress';
import React, { useEffect, useState } from "react";
import PieChart from 'react-pie-graph-chart';
import { Link } from "react-router-dom";
import Profile from '../../asset/Image/SIULOGO.png';
const TeachersProfile = () => {
    const [teachersBackground, setTeachersBackground] = useState([]);
    const [Course, setCourse] = useState([]);
    useEffect(() => {
        const username = sessionStorage.getItem('Teachers');
        fetch(`http://localhost:5000/Teachers/Profile?username=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setTeachersBackground(res))
    }, []);
    useEffect(() => {
        const username = sessionStorage.getItem('Teachers');
        fetch(`http://localhost:5000/Teachers/AssignCourse?teachername=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res => setCourse(res))
    }, []);
    return (
        <div className="container mt-5 mb-10">

            <div className="row">

                {teachersBackground[0] && <div class="col-md-4 mb-3 xyz">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src={Profile} alt="Admin" class="rounded-circle" width="100" />
                                <div class="mt-3">
                                    <h4 className='text-2xl font-serif'>{teachersBackground[0].name && teachersBackground[0].name}</h4>
                                    <h4 className='text-xl font-serif'>{teachersBackground[0].position && teachersBackground[0].position}</h4>
                                    <h4 className='text-xl font-serif'>Department Of  {teachersBackground[0].department && teachersBackground[0].department}</h4>
                                    <p class="text-3xl font-serif"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0">Email</h6>
                                <span class="text-secondary">{teachersBackground[0].email && teachersBackground[0].email}</span>
                            </li>

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

                </div>}
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
            <div className="container">
                <h5 class="text-4xl text-blod font-serif font-bold text-center mt-5">Assigned Course</h5>
                <br /><br />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Semester && Batch</th>

                        </tr>
                    </thead>
                    <tbody>

                        {Course.map(data => (
                            <tr key={data._id}>
                                <td>{data.courseName}</td>
                                <td>
                                    {/* Map through the semester array */}
                                    {data.semester.map((semesterData, index) => (
                                        <Link to={`/viewstudentsList/${semesterData.semester}/${data.courseName}/${data.CourseHoure}`} key={index}>
                                            <div>
                                                Batch: {semesterData.batch}, Semester: {semesterData.semester}
                                                {/* You can display more fields from the semester object */}
                                            </div>
                                        </Link>
                                    ))}
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeachersProfile;