import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star-solid.svg'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/constants";

const DeviceItem = ({device}) => {
  const navigate = useNavigate()

  return (
    <Col md={4} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={"gray"}>
        <Image src={process.env.REACT_APP_API_URL + device.ing} width={150} height={150}/>
        <div>
          <div className="text-black-50">
            samsung
          </div>
          <div>
            <div className="d-flex align-items-center">
              {device.rating}
              <Image src={star} width={15} height={15}/>
            </div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
