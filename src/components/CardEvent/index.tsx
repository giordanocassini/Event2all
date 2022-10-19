import { Card } from "react-bootstrap";
import "./cardEvent.scss";

type CardEventProps = {
  title: string;
  description: string;
  cardImage: string;
};

export default function CardEvent(props: CardEventProps) {
  return (
    <Card className=" card-event rounded text-center cards m-4">
      <Card.Body className="cardContent">
        <Card.Img
          src={`/images/${props.cardImage}.png`}
          alt={props.cardImage}
          className="cardImage mt-4 mb-3"
        />
        <h4 className="text-center">{props.title}</h4>
        <span>{props.description}</span>
      </Card.Body>
    </Card>
  );
}
