import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import CardEvent from "../../components/CardEvent";
import EventInfo from "../../components/EventInfo";
import SideBar from "../../components/SideBar/SideBar";
import "./eventName.scss";
export default function EventName() {
  const breadCrumbsItem = [
    { name: "Home", link: "/" },
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
              <EventInfo />
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
            <CardEvent
              title="Tarefas"
              description="Crie tarefas"
              cardImage="check_circle"
            />
          </div>
        </div>
      </div>
    </>
  );
}
