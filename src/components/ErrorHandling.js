import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ErrorHandling = ({setPage}) => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <header>
          <h1 className='Header'>!!! Invalid value for current CGPA!!!</h1>
        </header>
        <div className="ctr">
          <Form>
            <Form.Group>
              <Button
                className='ml-1'
                variant='primary'
                type='submit'
                onClick={() => {
                  setPage("Home");
                }}>
                Go Back
              </Button>            
            </Form.Group>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ErrorHandling;
