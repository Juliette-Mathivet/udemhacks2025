import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginPage.css"
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

function LoginPage() {
  return (
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
      
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>

    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://images.pexels.com/photos/4989135/pexels-photo-4989135.jpeg"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">MedzTracker</h4>
            </div>

            <p>Connection</p>


            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Vous n'avez pas de compte?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Créez votre compte
              </MDBBtn>
            </div>

          </div>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}


export default LoginPage;