import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CGPA = ({ user, courseGpa, setPage }) => {
  const calculate = () => {
    let totalPoint = user["currentCgpa"] * user["coursesCompleted"];
    for (var i = 0; i < courseGpa.length; i++) {
      totalPoint += parseFloat(courseGpa[i]);
    }
    let cgpa =
      totalPoint /
      (parseFloat(user["coursesCompleted"]) + parseFloat(courseGpa.length));
    return Number(cgpa.toFixed(2));
  };
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <header>
          <h1 className='Header'>Your CGPA is: {calculate()}</h1>
        </header>
        <div className='ctr'>
          <Form>
            <Form.Group>
              <Button
                className='ml-1'
                variant='primary'
                type='submit'
                onClick={() => {
                  setPage("Courses");
                }}>
                Go Back
              </Button>
              <Button
                className='ml-1'
                variant='secondary'
                type='submit'
                onClick={() => {
                  setPage("Home");
                }}>
                Start Over
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default CGPA;
