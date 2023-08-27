import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
const CourseStudentsList = () => {
    const { id } = useParams();
    const { course } = useParams();
    const [Students, setStudents] = useState([])
    useEffect(() => {


        fetch(`http://localhost:5000/Teachers/Students?semester=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem("Token")}`
            }
        })
            .then(res => res.json())

            .then(res => setStudents(res))
    }, []);

    return (
        <div className='container'>

            <h5 class="text-4xl text-blod font-serif font-bold text-center mt-5">Students List</h5>
            <br /><br />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Registration</th>
                        <th scope="col">Add Number</th>
                    </tr>
                </thead>
                <tbody>
                    {Students && Students.map(data => (
                        <tr key={data.roll}>
                            <th scope="row">{data.name}</th>
                            <td>{data.roll}</td>
                            <td>{data.registration_number}</td>
                            <td>
                                <Link to={`/AddNumber/${course}/${data.roll}/${id}/${data.name}/${data.registration_number}`}>Add</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            {<Link to={`/publisedResult/${course}`}>
                <button
                    type="submit"
                    className="mt-5 mb-10 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-cyan-600  rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                    View Publised Number
                </button>
            </Link>}
        </div>
    );
};

export default CourseStudentsList;