import React, { useEffect } from "react";
import { Card, Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";

const Courses = ({ numOfCourses, courseGpa, setCourseGpa, page, setPage }) => {
  if (!courseGpa.length) {
    for (var i = 0; i < numOfCourses; i++) {
      courseGpa.push(4.0);
    }
  }

  useEffect(() => {
    setCourseGpa(courseGpa);
  }, [page]);

  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>
          <h2 style={{ color: "red" }}>Enter GPA for 4 courses</h2>
        </Card.Title>
        <Form>
          <Form.Group className='mb-3'>
            <ListGroup>
              {[...Array(Math.floor(numOfCourses))].map((x, i) => (
                <ListGroup.Item key={Math.random() * 1000}>
                  <Form.Label>Course: {i + 1}:</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    defaultValue={4}
                    onChange={(e) => {
                      courseGpa[i] = e.target.value;
                    }}>
                    <option value='4.0'>4.0</option>
                    <option value='3.7'>3.7</option>
                    <option value='3.3'>3.3</option>
                    <option value='3.0'>3. 0</option>
                    <option value='2.7'>2.7</option>
                    <option value='2.3'>2.3</option>
                    <option value='2.0'>2.0</option>
                    <option value='1.7'>1.7</option>
                    <option value='1.3'>1.3</option>
                    <option value='1.0'>1.0</option>
                    <option value='0.7'>0.7</option>
                    <option value='0'>{"<"}0.7 (Fail)</option>
                  </Form.Select>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group className='text-center mb-1'>
            <Button
              className='mx-1'
              variant='primary'
              type='submit'
              onClick={() => {
                setPage("CGPA");
                setCourseGpa(courseGpa);
              }}>
              Next
            </Button>
            <Button
              variant='secondary'
              className='mx-1'
              onClick={() => {
                setPage("Home");
              }}>
              Previous
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Courses;
