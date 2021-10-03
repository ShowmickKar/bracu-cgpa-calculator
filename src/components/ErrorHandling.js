import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const ErrorHandling = ({ setPage }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center' style={{ color: "red" }}>
          <h2>!!! Error Occurred !!!</h2>
        </Card.Title>
        <Card.Subtitle className='text-center mb-3' style={{ color: "grey" }}>
          Invalid data type for current CGPA
        </Card.Subtitle>
        <Form>
          <Form.Group className='text-center mb-1'>
            <Button
              variant='danger'
              type='submit'
              onCLick={() => {
                setPage("Home");
              }}>
              Go Back
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ErrorHandling;
