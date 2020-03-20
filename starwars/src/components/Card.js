import React from "react"
import {
    Card, CardText, CardBody,
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.css';
  import {Col} from 'reactstrap';

function MyCard( props ) {
    return (
      <div>
        <Col xs="auto">
            <Card className="card">
                <CardBody className="cardBody">
                    <h3 className="cardTitle">{props.name}</h3>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Weight: {props.mass}</CardText>
                    <CardText>Hair Color: {props.hair_color}</CardText>
                    <CardText>Skin Color: {props.skin_color}</CardText>
                    <CardText>Eye Color: {props.eye_color}</CardText>
                    <CardText>Birth Year: {props.birth_year}</CardText>
                    <CardText>Gender: {props.gender}</CardText>
                </CardBody>
            </Card>
        </Col>
      </div>
    );
}

export default MyCard;
