import { Button } from "react-bootstrap";
//import Add from "/src/images/add.svg";
import './eventButton.scss';

export default function EventButton() {
  return (
    <>
      <Button className='event-button'>
      <img className="image-button" src={'public/images/add.svg'}></img>
      </Button>
    </>
  );
}