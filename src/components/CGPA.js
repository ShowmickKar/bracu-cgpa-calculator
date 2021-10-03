import React, { useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";

const CGPA = ({ user, courseGpa, setCourseGpa, page, setPage }) => {
  useEffect(() => {
    setCourseGpa(courseGpa);
  }, [page]);

  const calculate = () => {
    let totalPoint = user["currentCgpa"] * user["coursesCompleted"];
    for (var i = 0; i < courseGpa.length; i++) {
      totalPoint += parseFloat(courseGpa[i]);
    }
    let cgpa =
      totalPoint /
      (parseFloat(user["coursesCompleted"]) + parseFloat(courseGpa.length));
    return cgpa.toFixed(2);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center' style={{ color: "red" }}>
          <h2>Your CGPA is {calculate()}</h2>
        </Card.Title>
        <Form>
          <Form.Group className='text-center mb-1'>
            <Button
              variant='danger'
              type='submit'
              onClick={() => {
                setPage("Home");
              }}>
              Start Over
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CGPA;
