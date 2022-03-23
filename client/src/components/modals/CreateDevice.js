import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number === number))
  }
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <DropdownToggle>Choose type</DropdownToggle>
            <DropdownMenu>
              {device.types.map(type =>
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2">
            <DropdownToggle>Choose brand</DropdownToggle>
            <DropdownMenu>
              {device.brands.map(brand =>
                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <FormControl
            className="mt-2"
            placeholder='enter device name'
          />
          <FormControl
            className="mt-2"
            placeholder='enter price'
            type='number'
          />
          <FormControl
            className="mt-2"
            type='file'
          />
          <hr/>
          <Button variant="outline-dark" className="mb-4" onClick={addInfo}>Add new property</Button>
          {info.map(i =>
            <Row className="mb-3" key={i.number}>
              <Col md={4}>
                <FormControl
                  placeholder='property name'
                />
              </Col>
              <Col md={4}>
                <FormControl
                  placeholder='property description'
                />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>Delete</Button>
              </Col>
            </Row>
          )}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
