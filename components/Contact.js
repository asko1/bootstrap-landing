import React from "react";
import { Form, Button } from "react-bootstrap"

export default function Contact () {
    return (
      <div className="container text-white">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message to us</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
        </Form>
      </div>
        
    )
}