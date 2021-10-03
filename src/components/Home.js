import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Home = ({ user, setUser, setPage }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Reached");
    try {
      if (
        isNaN(parseFloat(data.currentCgpa)) ||
        parseFloat(data.currentCgpa) > 4 ||
        parseFloat(data.currentCgpa) < 0
      ) {
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
    <Card>
      <Card.Body>
        <Card.Title className='text-center' style={{ color: "red" }}>
          <h2>Bracu CGPA Calculator</h2>
        </Card.Title>
        <Card.Subtitle
          className='text-center mt-1 mb-4'
          style={{ color: "grey" }}>
          Calculate your CGPA in just seconds!
        </Card.Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3'>
            <Form.Label>Current CGPA(before this semester)</Form.Label>
            <Form.Control
              type='text'
              placeholder='Current CGPA'
              {...register("currentCgpa", { required: true })}></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Courses completed(before this semester)</Form.Label>
            <Form.Control
              type='number'
              placeholder='Courses completed'
              {...register("coursesCompleted", {
                required: true,
              })}></Form.Control>
            <Form.Text className='text-muted'>
              Hint: Courses = Credit/3 (If you can remember your credit)
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Number of Courses this semester</Form.Label>
            <Form.Select
              aria-label='Default select example'
              defaultValue={4}
              {...register("numOfCourses", { required: true })}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-1'>
            <Button variant='primary' type='submit'>
              Next
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Home;
