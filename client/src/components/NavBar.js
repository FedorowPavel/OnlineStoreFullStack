import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/constants";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const NavigationBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Buy device</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"}>Admin panel</Button>
            <Button variant={"outline-light"} className="ms-2">Logout</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => {user.setIsAuth(true)}}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavigationBar;
