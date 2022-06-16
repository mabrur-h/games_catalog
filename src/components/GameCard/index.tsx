import {Button, Card, Col, Image} from 'react-bootstrap'
import {useState} from "react";
import "./style.css"
import moment from "moment"

export default function GameCardComponent(props: any) {
  const [isLiked, setIsLiked] = useState<Boolean>(false);

  return (
    <Col md={3} className="p-4">
      <Card style={{height: '600px'}}>
        <Card.Header className="d-flex align-items-center">
          <div className="game_rating_box d-flex align-items-center justify-content-start">
            <div className="game_rating">{props.rating ? props.rating : '--'}</div>
          </div>
          <div className="text-start ps-3">
            <p className="fw-bold p-0 m-0 game_name">{props.game_name}</p>
            <p className="p-0 m-0">{moment(props.release).format('ll')}</p>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <Card.Img variant="top" src="https://picsum.photos/512/300"/>
          <Card.Text className="text-sm-start container-fluid py-2 summary-text">
            {props.summary}
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