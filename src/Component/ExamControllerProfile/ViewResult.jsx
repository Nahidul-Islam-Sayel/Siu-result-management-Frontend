import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ViewResult = () => {
  let sum = 1;
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);
  const [OneStudents, setOneStudents] = useState([]);
  const { roll, semester } = useParams();
  const [visible, setVisible] = useState(false);
  const [visibleR, setVisibleR] = useState(false);
  const [visibleRR, setVisibleRR] = useState(false);
  const [Hidevisible, setHideVisible] = useState(false);
  console.log(roll);
  const [publisedResult, setPublisedResult] = useState({
    name: "",
    roll: "",
    reg: "",
    semester: "",
    publisedResult: "",
  });
  useEffect(() => {
    fetch(`http://localhost:5000/Controler/SingleStudents?roll=${roll}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setOneStudents(res);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/LoginDepartmentCSE/AllCourseList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const [publisedResulted, setPublisedResulted] = useState({
    name: "",
    roll: "",
    reg: "",
    semester: "",
  });

  const PublisedResult = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/Controler/PublisedResult", result, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("Token")}`,
        },
      })
      .then((res) => {
        if (res.data.message === "Result Publised successful!") {
          setVisible(true);
        } else {
          setVisibleR(true);
        }
      });
  };
  const HideResult = () => {
    axios
      .delete(
        `http://localhost:5000/Controler/HideResult/${roll}/${semester}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("Token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.message === "Deleted Successfully") {
          setHideVisible(true);
        } else {
          setVisibleR(true);
        }
      });
  };
  const promoteStudent = () => {
    axios
      .put(`http://localhost:5000/Controler/UpdatedStudents/${roll}`)
      .then((res) => {
        if (res.data.message === "Student's semester updated successfully") {
          setVisibleRR(true);
        } else {
          setVisibleR(true);
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle error here
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/Controler/AllResult?roll=${roll}&Semester=${semester}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${sessionStorage.getItem("Token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setResult(res));
  }, []);


  useEffect(() => {
    if (visibleRR) {
      const timeout = setTimeout(() => {
        setVisibleRR(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [visibleRR]);
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [visible]);
  useEffect(() => {
    if (visibleR) {
      const timeout = setTimeout(() => {
        setVisibleR(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [visibleR]);
  useEffect(() => {
    if (Hidevisible) {
      const timeout = setTimeout(() => {
        setHideVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [Hidevisible]);
  return (
    <div>
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visible ? "" : "hidden"
          }`}
      >
        <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
          Successfully Publised Result
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${Hidevisible ? "" : "hidden"
          }`}
      >
        <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
          Successfully Hide Result
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleR ? "" : "hidden"
          }`}
      >
        <div className="max-w-xl w-full bg-red-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
          Someing Is Wrong Please Try Again
        </div>
      </div>
      <div
        className={`fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end transition-all duration-500 ${visibleRR ? "" : "hidden"
          }`}
      >
        <div className="max-w-xl w-full bg-green-400  text-white shadow-lg rounded-lg pointer-events-auto h-10 text-center ">
          Student is promoted successfully
        </div>
      </div>
      <div className="container">
        <div className="mt-10 mb-10 font-black text-xl font-mono">
          <h1>Name: {OneStudents && OneStudents.name} </h1>
          <h1>Roll: {OneStudents && OneStudents.roll} </h1>
          <h1>
            Registration: {OneStudents && OneStudents.registration_number}{" "}
          </h1>
          <h1>Semster: {OneStudents && OneStudents.current_semister} </h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Course Code</th>
              <th scope="col">Credit Hours</th>
              <th scope="col">Sessional</th>
              <th scope="col">Mid Term</th>
              <th scope="col">Final</th>
              <th scope="col">Total</th>
              <th scope="col">CGPA</th>
            </tr>
          </thead>
          <tbody>
            {result.length > 0 &&
              result.map((result) => (
                <tr>
                  <td>{result.CourseCode}</td>
                  <td>{result.CourseHoure}</td>
                  <td>{result.Sessional}</td>
                  <td>{result.Midterm}</td>
                  <td>{result.Final}</td>
                  <td>{result.Total}</td>
                  <td>
                    {result.Total >= 80 && result.Total <= 100
                      ? 4.0
                      : result.Total >= 75 && result.Total <= 79
                        ? 3.75
                        : result.Total >= 70 && result.Total <= 74
                          ? 3.5
                          : result.Total >= 65 && result.Total <= 69
                            ? 3.25
                            : result.Total >= 60 && result.Total <= 64
                              ? 3.0
                              : result.Total >= 55 && result.Total <= 59
                                ? 2.75
                                : result.Total >= 50 && result.Total <= 54
                                  ? 2.5
                                  : result.Total >= 45 && result.Total <= 49
                                    ? 2.25
                                    : result.Total >= 40 && result.Total <= 44
                                      ? 2.0
                                      : result.Total >= 0 && result.Total <= 39
                                        ? 0.0
                                        : ""}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          type="button"
          class="btn btn-outline-success mb-20 mr-2"
          onClick={PublisedResult}
        >
          Published Result
        </button>
        <button
          type="button"
          class="btn btn-outline-success mb-20 mr-2"
          onClick={HideResult}
        >
          Hide Result
        </button>
        <button
          type="button"
          class="btn btn-outline-success mb-20 mr-2"
          onClick={promoteStudent}
        >
          Promote Students
        </button>
      </div>
    </div>
  );
};

export default ViewResult;
