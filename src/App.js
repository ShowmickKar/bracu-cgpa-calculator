import React from "react";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CGPA from "./components/CGPA";
import ErrorHandling from "./components/ErrorHandling";
import { useState, useEffect } from "react";

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

  return page === "Home" ? (
    <Home user={user} setUser={setUser} setPage={setPage} />
  ) : page === "Courses" ? (
    <Courses
      numOfCourses={user["numOfCourses"]}
      courseGpa={courseGpa}
      setCourseGpa={setCourseGpa}
      page={page}
      setPage={setPage}
    />
  ) : page === "ErrorHandling" ? (
    <ErrorHandling setPage={setPage} />
  ) : (
    <CGPA
      user={user}
      courseGpa={courseGpa}
      setCourseGpa={setCourseGpa}
      page={page}
      setPage={setPage}
    />
  );
};

export default App;
