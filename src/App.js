import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CGPA from "./components/CGPA";
import ErrorHandling from "./components/ErrorHandling";
import { Container } from "react-bootstrap";

const App = () => {
  const [user, setUser] = useState({
    currentCgpa: 0.0,
    coursesCompleted: 0,
    numOfCourses: 4,
  });
  const [courseGpa, setCourseGpa] = useState([]);
  const [page, setPage] = useState("Home");

  useEffect(() => {
    if (page !== "Home") return;
    setUser({
      currentCgpa: 0.0,
      coursesCompleted: 0,
      numOfCourses: 4,
    });
    setCourseGpa([]);
  }, [page]);

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        {page === "Home" ? (
          <Home user={user} setUser={setUser} setPage={setPage} />
        ) : page === "Courses" ? (
          <Courses
            numOfCourses={user["numOfCourses"]}
            courseGpa={courseGpa}
            setCourseGpa={setCourseGpa}
            page={page}
            setPage={setPage}
          />
        ) : page === "CGPA" ? (
          <CGPA
            user={user}
            courseGpa={courseGpa}
            setCourseGpa={setCourseGpa}
            page={page}
            setPage={setPage}
          />
        ) : (
          <ErrorHandling setPage={setPage} />
        )}
      </div>
    </Container>
  );
};

export default App;
