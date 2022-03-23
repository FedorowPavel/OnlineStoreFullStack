import React, {useContext, useState} from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
        console.log(data);
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-2"
            placeholder="enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
              onClick={click}
            >
              {isLogin ? "login" : "register"}
            </Button>
          </div>

        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
