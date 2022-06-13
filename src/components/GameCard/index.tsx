import {Button, Card, Col, Image} from 'react-bootstrap'
import {useState} from "react";

export default function GameCardComponent() {
  const [isLiked, setIsLiked] = useState<Boolean>(false);

  return (
    <Col md={3} className="p-4">
      <Card>
        <Card.Header className="d-flex align-items-center">
          <div className="ps-2">
            <Image src="https://picsum.photos/60" alt="ava" roundedCircle={true}/>
          </div>
          <div className="text-start ps-3">
            <p className="fw-bold p-0 m-0">Uncharted 4: A thief's end</p>
            <p className="p-0 m-0">2016 may 10</p>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Card.Img variant="top" src="https://picsum.photos/512/300"/>
          <Card.Text className="text-sm-start container-fluid py-2">
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div>
            <Button
              className="collapse-button"
              onClick={() => setIsLiked(!isLiked)}
            >
              <i className={isLiked ? 'fa fa-heart collapse-symbol' : 'fa fa-heart-o collapse-symbol'}/>
            </Button>
            <Button
              className="collapse-button"
            >
              <i className='fa fa-share-alt collapse-symbol'/>
            </Button>
          </div>
          <div>
            <i className='fa fa-angle-down collapse-symbol'/>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  )
}