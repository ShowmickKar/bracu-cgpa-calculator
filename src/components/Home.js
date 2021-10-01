import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Home = ({ user, setUser, setPage }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      if (isNaN(parseFloat(data.currentCgpa)) || parseFloat(data.currentCgpa) > 4 || parseFloat(data.currentCgpa) < 0) {
        throw "ValueError";
      }      
      user["currentCgpa"] = data.currentCgpa;
      user["coursesCompleted"] = data.coursesCompleted;
      user["numOfCourses"] = data.numOfCourses;
      setUser(user);
      setPage("Courses");
    } catch (err) {
      console.log(err);
      setPage("ErrorHandling");
    }
  };

  return (
    <div className='Home'>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <header>
            <h1 className='Header'>BRACU CGPA CALCULATOR</h1>
          </header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3'>
              <Form.Label>Current CGPA(before this semester)</Form.Label>
              <Form.Control
                type='text'
                placeholder='Current CGPA'
                {...register("currentCgpa", { required: true })}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>
                Number of Courses completed (Before This Semester)
              </Form.Label>
              <Form.Control
                type='number'
                placeholder='Courses Completed'
                {...register("coursesCompleted", { required: true })}
              />
              <Form.Text className='text-muted'>
                Hint: Courses = Credit/3 (If you can remember your credit)
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Number of Courses in This Semester</Form.Label>
              <Form.Select
                aria-label='Default select example'
                {...register("numOfCourses", { required: true })}
                defaultValue={4}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </Form.Select>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Home;
