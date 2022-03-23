import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {observer} from "mobx-react-lite";
import {createDevices, fetchBrands, fetchTypes} from "../../http/deviceApi";

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  // const [brand, setBrand] = useState(null)
  // const [type, setType] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number === number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value}: i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('ing', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevices(formData).then(data => onHide())
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
            <DropdownToggle>{device.selectedType.name || "Choose type"}</DropdownToggle>
            <DropdownMenu>
              {device.types.map(type =>
                <DropdownItem onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="mt-2">
            <DropdownToggle>{device.selectedBrand.name || "Choose brand"}</DropdownToggle>
            <DropdownMenu>
              {device.brands.map(brand =>
                <DropdownItem onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
          <FormControl
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-2"
            placeholder='enter device name'
          />
          <FormControl
            value={price}
            onChange={e => setPrice(+e.target.value)}
            className="mt-2"
            placeholder='enter price'
            type='number'
          />
          <FormControl
            className="mt-2"
            type='file'
            onChange={selectFile}
          />
          <hr/>
          <Button variant="outline-dark" className="mb-4" onClick={addInfo}>Add new property</Button>
          {info.map(i =>
            <Row className="mb-3" key={i.number}>
              <Col md={4}>
                <FormControl
                  value={i.title}
                  onChange={e => changeInfo('title', e.target.value, i.number)}
                  placeholder='property name'
                />
              </Col>
              <Col md={4}>
                <FormControl
                  value={i.device}
                  onChange={e => changeInfo('description', e.target.value, i.number)}
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
        <Button variant="outline-success" onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
