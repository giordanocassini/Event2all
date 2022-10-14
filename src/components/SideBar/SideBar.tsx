import { InputGroup, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "react-avatar";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { removeUser } from "../../store/modules/users";
import EventLogo from "../../../public/images/dashboard.png";
import { RootStore } from "../../store";
import EventList from "./eventList";
import { useEffect, useState, useCallback } from "react";
import "./sideBar.scss";
import CreateEvent from "./modal";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { getEventListByUser } from "../../services/userServices";
import { Event } from "../../utils/types";
import { delEvent, getEvent } from "../../services/auth";

export default function SideBar() {
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [event, setEvent] = useState<Event>();
  const [events, setEvents] = useState<Event[]>([]);
  const user = useSelector((store: RootStore) => store.userReduce);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const exit = () => {
    window.localStorage.clear();
    dispatch(removeUser());
    navigate("/");
  };

  const fetchUser = useCallback(async () => {
    const response = await getEventListByUser(user.id).then((res) => {
      return res.data;
    });

    setEvents(response);
  }, [setEvents, user.id, edit]);

  const handleDeleteEvent = useCallback(
    async (id: number) => {
      const response = await delEvent(id!).then((res) => res);
      if (response.status === 204) {
        const newEvents = events.filter((event) => event.id !== id);
        setEvents(newEvents);
      }
    },
    [events, setEvents]
  );

  const editEvent = async (id: number) => {
    const response = await getEvent(id).then((res) => res.data);
    setEvent(response);
    setShow(true);
    setEdit(true);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="vh-100 d-flex">
      <div className="d-flex flex-column align-items-center stylesidebar">
        <div className="">
          <img src="/images/logotipo2.png" alt="logo" className="mt-5 mb-4" />
        </div>
        <div className="me-auto">
          <br />
          <br />
          <Avatar name={user.name} round={true} size="64" textSizeRatio={3.9} />

          <span className="ms-3 text-bold" style={{ color: "white" }}>
            {user.name}
          </span>
        </div>
        <span className="mt-5 me-auto events-font" style={{ color: "white" }}>
          <div className="linkEvent">
            <img className="mb-2 px-2" src={EventLogo} alt="Logo" />
            Meus Eventos
          </div>
        </span>
        <hr className="mb-4" />
        {events.length > 0 ? (
          events.map((event) => (
            <div
              className="d-flex justify-content-between text-white fs-5 w-100 mb-4"
              key={event.id}
            >
              <Link className="event-text mt-2" to={`/evento/${event.id}`}>
                <div>{event.name}</div>
              </Link>
              <div className="">
                <Dropdown>
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    className="dropdown-img"
                  >
                    <BsThreeDotsVertical color="white" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => editEvent(event.id)}>
                      Editar
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDeleteEvent(event.id)}>
                      Deletar
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          ))
        ) : (
          <EventList
            setEvents={setEvents}
            setShow={setShow}
            show={show}
            setEdit={setEdit}
          />
        )}

        <hr />
        {events.length > 0 && (
          <CreateEvent
            setEvents={setEvents}
            setShow={setShow}
            show={show}
            setEdit={setEdit}
            event={event!}
            edit={edit}
          />
        )}
        <Button className="logoff-botao w-100 m-4 " onClick={exit}>
          <IoExitOutline className="me-2" />
          Fazer Logoff
        </Button>
      </div>
    </div>
  );
}
