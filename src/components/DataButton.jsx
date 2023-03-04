import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const DataButton = ({ onDelete, onViewData }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="btn-all">
        <Button className="btn-style btn-danger" onClick={onDelete}>
          Remove All
        </Button>
        <Button className="btn-style btn-success" onClick={onViewData}>
          View All
        </Button>
      </Col>
    </Row>
  );
};

export default DataButton;
