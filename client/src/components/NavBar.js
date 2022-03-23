import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavigationBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
  }
  console.log(user.isAuth);
  const openAdmin =  () => {
    console.log(user.isAuth)
    navigate(ADMIN_ROUTE)
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Buy device</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={openAdmin}>Admin panel</Button>
            <Button variant={"outline-light"} className="ms-2" onClick={() => logout()}>Logout</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavigationBar;
