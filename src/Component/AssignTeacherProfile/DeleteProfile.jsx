import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DeleteProfile = () => {
    const { id } = useParams();
    const deleteitem = () => {
        console.log(id)
        fetch(`http://localhost:5000/LoginDepartmentCSE/DeleteTeachers/${id}`, {
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
                    <Modal.Title>Are Your Sure You Wan't To Delete Teachers Profile?</Modal.Title>
                </Modal.Header>



                <Modal.Footer>
                    <Link to="/DepartmentCSE">
                        <Button variant="danger" className='bg-red-500 mr-2' onClick={() => deleteitem(id)}>Delete</Button>
                        <Button variant="primary" className='bg-green-500'>Cencle</Button>
                    </Link>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default DeleteProfile;