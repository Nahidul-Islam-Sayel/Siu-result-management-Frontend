import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DeleteCourse = () => {
    const { id } = useParams();
    const deleteitem = () => {

        fetch(`http://localhost:5000/LoginDepartmentCSE/DeleteCourse/${id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(res => {

            }
            )
    }
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are Your Sure You Wan't To Delete The Course?</Modal.Title>
                </Modal.Header>



                <Modal.Footer>
                    <Link to="/CourseList">
                        <Button variant="danger" className='bg-red-500 mr-2' onClick={() => deleteitem(id)}>Delete</Button>
                        <Button variant="primary" className='bg-green-500'>Cencle</Button>
                    </Link>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default DeleteCourse;