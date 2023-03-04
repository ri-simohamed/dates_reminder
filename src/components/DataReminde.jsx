import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DataReminde = ({ data }) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="py-3">
      <div className="rectangle">
        {data.length ? (data.map((item) =>
          <div className="item" key={item.id}>
          <div className="item-top">
            <img className="img-avatar" src={item.img} alt=""/>
          </div>
          <div className="item-bottom">
              <h1>{item.Name}</h1>
              <span>{item.time}</span>
          </div>
        </div>
        )) : <h1 className='error'>No Data Reminder Found!</h1>}
      </div>
    </Col>
  </Row>
  )
}

export default DataReminde