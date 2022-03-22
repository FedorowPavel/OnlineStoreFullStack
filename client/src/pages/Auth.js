import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-2"
            placeholder="enter email"
          />
          <Form.Control
            className="mt-2"
            placeholder="enter password"
          />
          <div className="d-flex flex-row justify-content-between mt-2">
            {isLogin ?
              <div>
              No account?
              <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
            </div>
            :
              <div>
                Have account?
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            }
            <Button
              variant={"outline-success"}
            >
              {isLogin ? "login" : "register"}
            </Button>
          </div>

        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
