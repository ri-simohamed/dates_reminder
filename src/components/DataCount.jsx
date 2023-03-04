import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DataCount = ({ data }) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="">
    To day you have {data.length} reminder
    </Col>
  </Row>
  )
}

export default DataCount