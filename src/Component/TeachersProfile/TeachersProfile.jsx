import { Line } from 'rc-progress';
import React, { useEffect, useState } from "react";
import PieChart from 'react-pie-graph-chart';
const TeachersProfile = () => {
    const [teachersBackground, setTeachersBackground] = useState([]);
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
    return (
        <div className="container mt-5 mb-10">
            <div className="row">
                <div class="col-md-4 mb-3 xyz">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img src="" alt="Admin" class="rounded-circle" width="150" />
                                <div class="mt-3">
                                    <h4 className='text-3xl font-serif'>Department Of</h4>
                                    <h4 className='text-4xl font-mono'></h4>
                                    <p class="text-secondary mb-1">Admin</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <ul class="list-group list-group-flush">

                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0">Email</h6>
                                <span class="text-secondary"></span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0">Phone</h6>
                                <span class="text-secondary"></span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <div class="row">
                                    <div class="col-sm-12">
                                        {/* <NavLink to="/EdiProfile"><a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit Profile</a></NavLink>    */}
                                    </div>
                                </div>
                            </li>
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
                                <div class="card-header">Total FACULTY MEMBERS</div>
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
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
                            <h5>Doctor</h5>
                            <Line percent="" strokeWidth={2} strokeColor="#E97D30" />
                            <h5>User</h5>
                            <Line percent="" strokeWidth={2} strokeColor="#62B170" />
                            <h5>Blood Donner And Volunteer</h5>
                            <Line percent="" strokeWidth={2} strokeColor="#F1AF20" />
                        </div>
                        <div className="col-md-5">
                            <PieChart data={[
                                {
                                    type: "Doctor",
                                    value: 10,
                                    color: "#E97D30"
                                },
                                {
                                    type: "User",
                                    value: 10,
                                    color: "#62B170"
                                },
                                {
                                    type: "Report",
                                    value: 10,
                                    color: "#F1AF20"
                                }
                            ]} />
                        </div>
                    </div>



                </div>
            </div>
            <div className="container">
                <h5 class="text-4xl text-blod font-serif font-bold text-center mt-5">FACULTY MEMBERS</h5>
                <div className="row">

                    <div className="col-md-4 mt-5 ">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="text-2xl text-blod font-serif font-bold"></h5>
                                <h6 class="text-xl italic font-bold"></h6>
                                <h6 class="text-lg italic font-bold">Department Of </h6>

                                <button type="button" class="btn btn-outline-info m=2" >View Profile</button>


                                <button type="button" class="btn btn-outline-info m-2" >Update</button>



                                <button type="button" class="btn btn-outline-info m-2">Delate</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersProfile;