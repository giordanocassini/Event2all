import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import CardEvent from "../../components/CardEvent";
import EventInfo from "../../components/EventInfo";
import SideBar from "../../components/SideBar/SideBar";
import { getEvent } from "../../services/auth";
import { BreadcrumbItem, Event } from "../../utils/types";
import "./eventName.scss";

export default function EventName() {
  const [event, setEvent] = useState<Event>();
  const [breadCrumbs, setBreadCrumbs] = useState<BreadcrumbItem[]>([]);
  const eventId = useParams().id;

  useEffect(() => {
    console.log(eventId);
    if (eventId) {
      getEvent(eventId)
        .then((response) => {
          const event = response.data;
          setEvent(event);
          setBreadCrumbs([
            { name: "Dashboard", link: "/dashboard" },
            { name: event?.name },
          ]);
        })
        .catch(() => {
          alert("Não foi possível carregar o evento");
        });
    }
  }, [setEvent, setBreadCrumbs, eventId]);

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100">
          <div>
            <div>
              <BreadCrumbs items={breadCrumbs} />
            </div>
            <div>
              <EventInfo event={event} />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center flex-wrap">
            <Link className="eventLinkStyle" to={`/orcamento/${event?.id}?event=${event?.name}`}>
              <CardEvent
                title="Orçamento"
                description="Faça o planejamento de custos"
                cardImage="paid"
              />
            </Link>
            <Link className="eventLinkStyle" to={`/convidados/${event?.id}?event=${event?.name}`}>
              <CardEvent
                title="Convidados"
                description="Gerencie seus convidados"
                cardImage="group"
              />
            </Link>
            <Link className="eventLinkStyle" to={`/tarefas/${event?.id}?event=${event?.name}`}>
              <CardEvent
                title="Tarefas"
                description="Crie tarefas"
                cardImage="check_circle"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
