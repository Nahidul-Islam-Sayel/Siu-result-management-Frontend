import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
const PublisedNumber = () => {
    const { id } = useParams();
    const { course, semester } = useParams();
    console.log(course, semester)
    const [Students, setStudents] = useState([])
    useEffect(() => {


        fetch(`http://localhost:5000/Teachers/ResultList?course=${course}`, {
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

            <h5 className="text-4xl font-bold text-center mt-5">Published Result List</h5>
            <br /><br />
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Roll</th>


                            <th scope="col">Sessional</th>
                            <th scope="col">Mid</th>
                            <th scope="col">Final</th>
                            <th scope="col">Total</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Students && Students.map(data => (
                            <tr key={data.Name}>
                                <td scope="row">{data.Name}</td>
                                <td scope="row">{data.Roll}</td>


                                <td>{data.Sessional}</td>
                                <td>{data.Midterm}</td>
                                <td>{data.Final}</td>
                                <td>{data.Total}</td>
                                <td>
                                    <Link to={`/EditNumber/${data._id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default PublisedNumber;