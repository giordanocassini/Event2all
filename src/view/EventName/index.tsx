import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";
import CardEvent from "../../components/CardEvent";
import EventInfo from "../../components/EventInfo";
import SideBar from "../../components/SideBar/SideBar";
import "./eventName.scss";
import { getUserEvents } from "../../services/auth";

export default function EventName() {
  const [event, setEvent] = useState()
  const params = useParams();
  const user = window.localStorage.getItem("user")

  if(user){
    const userId = JSON.parse(user).id
    getUserEvents(userId).then((response) => {
      const userEvents = response.data;
      const event = userEvents.find((e: any) => e.id = params.id);
      setEvent(event);
    })
  }

  const breadCrumbsItem = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Nome do evento", link: "/evento" },
  ];

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100">
          <div>
            <div>
              <BreadCrumbs items={breadCrumbsItem} />
            </div>
            <div>
              <EventInfo event={event}/>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <Link className="eventLinkStyle" to={"/orcamento"}>
              <CardEvent
                title="Orçamento"
                description="Faça o planejamento de custos"
                cardImage="paid"
              />
            </Link>
            <Link className="eventLinkStyle" to={"/convidados"}>
              <CardEvent
                title="Convidados"
                description="Gerencie seus convidados"
                cardImage="group"
              />
            </Link>
            <Link className="eventLinkStyle" to={"/tarefas"}>
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
