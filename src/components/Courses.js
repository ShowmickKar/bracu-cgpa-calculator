import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useEffect } from "react";

const Courses = ({ numOfCourses, courseGpa, setCourseGpa, page, setPage }) => {
  // const options = [
  //   { label: "4.0", value: "4.0" },
  //   { label: "3.7", value: "3.7" },
  //   { label: "3.3", value: "3.3" },
  //   { label: "3.0", value: "3.0" },
  //   { label: "2.7", value: "2.7" },
  //   { label: "2.3", value: "2.3" },
  //   { label: "2.0", value: "2.0" },
  //   { label: "1.7", value: "1.7" },
  //   { label: "1.3", value: "1.3" },
  //   { label: "0.7", value: "0.7" },
  //   { label: "<0.7 (Fail)", value: "0" },
  // ];

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(gpa);
  };
  let gpa = [];
  for (var i = 0; i < numOfCourses; i++) {
    gpa.push(4.0);
  }

  useEffect(() => {
    setCourseGpa(gpa);
  }, [page])

  return (
    <Container
      className='d-flex justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <header>
          <h1 className='Header'>Enter GPA for 4 Courses</h1>
        </header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ul className='Courses'>
            {[...Array(Math.floor(numOfCourses))].map((x, i) => (
              <li key={Math.random() * 1000}>
                <div>
                  <Form.Group className='mb-3'>
                    <Form.Label>Course {i + 1}:</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      defaultValue='4.0'
                      {...register("gpa", { required: true })}
                      onChange={(e) => {
                        // console.log(e.target.value);
                        gpa[i] = e.target.value;
                        // console.log(gpa);
                        // setCourseGpa(gpa);
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
                setCourseGpa(gpa);
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
