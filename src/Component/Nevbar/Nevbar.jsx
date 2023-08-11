import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import siulogo from '../../asset/Image/SIULOGO.png';
import "./Nevbar.css";
const Nevbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin, Adminlogin, setAdminlogin, teacherslogin, setTeacherslogin] = useContext(userContext);
    const toggle = () => setIsOpen(!isOpen);
    const logout = () => {
        setLogin(false);
        sessionStorage.clear();
        setAdminlogin(false);
        setTeacherslogin(false);

    }

    return (
        <div>
            <nav class="bg-cyan-500 h-30 border-b-2 border-cyan-600 shadow-md">
                <div class="flex items-center justify-center">
                    <div class="flex flex-col items-center inline-block mt-3">

                        <img src={siulogo} class="h-18" alt="Logo" />

                        <h1 class="text-white text-2xl font-bold font-mono">
                            Sylhet International University
                        </h1>
                    </div>
                </div>
            </nav>
            <nav className="bg-cyan-500 shadow-lg ">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7 text-lg">

                            <div className="md:hidden flex items-center">
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-white "
                                    onClick={toggle}
                                >
                                    <svg
                                        className="h-6 w-6 fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="4" width="24" height="2" />
                                        <rect y="11" width="24" height="2" />
                                        <rect y="18" width="24" height="2" />
                                    </svg>
                                </button>
                            </div>

                            <div
                                className={`${isOpen ? "block" : "hidden"
                                    } md:flex md:items-center md:space-x-1 text-white`}
                            >
                                <Link to="/" className="block py-4 text-white px-2 md:p-0   font-bold">
                                    Home
                                </Link>
                                <Link to="/" className="block py-4 text-white px-2 md:p-0   font-bold">

                                    About
                                </Link>

                                {(sessionStorage.getItem("Department") || login === true) ?
                                    (<>
                                        <Link to="/DepartmentCSE" className="block py-4 text-white px-2 md:p-0   font-bold">
                                            Profile
                                        </Link>

                                        <Link to="/RegistrationForm" className="block py-4 text-white px-2 md:p-0   font-bold">
                                            Create Profile
                                        </Link>

                                        <Link to="/AssignCourse" className="block py-4 text-white px-2 md:p-0   font-bold" >
                                            Assign Course
                                        </Link>
                                        <Link to="/CourseList" className="block py-4 text-white px-2 md:p-0   font-bold" >
                                            Offered Courses
                                        </Link>
                                        <Link to="/" className="block py-4 text-white px-2 md:p-0   font-bold" onClick={logout}>
                                            Logout
                                        </Link>

                                    </>) :
                                    (sessionStorage.getItem("TeachersLogin") || teacherslogin === true) ?
                                        (<>
                                            <Link to="/TeachersProfile" className="block py-4 text-white px-2 md:p-0   font-bold">
                                                Profile
                                            </Link>


                                            <Link to="/" className="block py-4 text-white px-2 md:p-0   font-bold" onClick={logout}>
                                                Logout
                                            </Link>

                                        </>)
                                        :
                                        (<><Link to="/login" className="block py-4 text-white px-2 md:p-0   font-bold">
                                            Login
                                        </Link>
                                            <Link to=""
                                                href="#"
                                                className="block py-4 text-white px-2 md:p-0   font-bold"
                                            >
                                                Contact Us
                                            </Link></>
                                        )



                                }



                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>

    );
};

export default Nevbar;
