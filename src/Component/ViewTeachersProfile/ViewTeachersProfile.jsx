import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const ViewTeachersProfile = () => {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/LoginDepartmentCSE/SingleTechersCourse', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())
            .then(res =>
                setCourse(res),

            )

    }, [])

    const filteredCourses = course.filter(course => course.teachersName === id);
    return (
        <div class="container mx-auto my-60">
            <div>

                <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div class="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div class="mt-16">
                        <h1 class="font-bold text-center text-3xl text-gray-900">{id}</h1>



                        <div class="w-full">
                            <h1 class="font-bold  ml-3 text-lg text-gray-900">Courses</h1>
                            <div class="w-full text-md font-semibold flex flex-col items-center overflow-hidden text-sm">
                                {filteredCourses.map(data => <div class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">

                                    {data.courseName}

                                </div>)
                                }


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



    );
};

export default ViewTeachersProfile;