import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useEffect } from "react";

const Courses = ({ numOfCourses, courseGpa, setCourseGpa, page, setPage }) => {
  const { register, handleSubmit } = useForm();

  if (!courseGpa.length) {
    for (var i = 0; i < numOfCourses; i++) {
      courseGpa.push(4.0);
    }
  }

  const setDefaultValue = (i) => {
    return courseGpa[i];
  };

  useEffect(() => {
    setCourseGpa(courseGpa);
  }, [page]);


  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <header>
          <h1 className='Header'>Enter GPA for {numOfCourses} Courses</h1>
        </header>
        <Form>
          <ul className='Courses'>
            {[...Array(Math.floor(numOfCourses))].map((x, i) => (
              <li key={Math.random() * 1000}>
                <div>
                  <Form.Group className='mb-3'>
                    <Form.Label>Course {i + 1}: temp: {setDefaultValue(i)}</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      // defaultValue={setDefaultValue(i)}
                      defaultValue={i % 2 === 0 ? "4.0" : "3.7"}
                      {...register("gpa", { required: true })}
                      onChange={(e) => {
                        courseGpa[i] = e.target.value;
                      }}>
                      <option value='4.0'>4.0</option>
                      <option value='3.7'>3.7</option>
                      <option value='3.3'>3.3</option>
                      <option value='3.0'>3.0</option>
                      <option value='2.7'>2.7</option>
                      <option value='2.3'>2.3</option>
                      <option value='2.0'>2.0</option>
                      <option value='1.7'>1.7</option>
                      <option value='1.3'>1.3</option>
                      <option value='1.0'>1.0</option>
                      <option value='0.7'>0.7</option>
                      <option value='0'>{"<"}0.7 (Fail)</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </li>
            ))}
          </ul>
          <Form.Group className='mb-4'>
            <Button
              className='ml-1'
              variant='primary'
              type='submit'
              onClick={() => {
                setPage("CGPA");
                setCourseGpa(courseGpa);
              }}>
              Next
            </Button>
            <Button
              className='ml-1'
              variant='secondary'
              onClick={() => {
                setPage("Home");
              }}>
              Go Back
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default Courses;
