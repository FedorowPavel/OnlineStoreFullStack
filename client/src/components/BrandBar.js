import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer(() => {
  const {device} = useContext(Context)


  return (
    <Row className="d-flex" xs="auto">
      {device.brands.map(brand =>
        <Col key={brand.id}>
          <Card
            border={brand.id === device.selectedBrand.id ? 'primary' : 'gray'}
            className="p-3"
            style={{cursor: 'pointer'}}
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </Card>
        </Col>
      )}
    </Row>
  );
})

export default BrandBar;
