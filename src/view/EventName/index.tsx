import CardEvent from "../../components/CardEvent";
import EventInfo from "../../components/EventInfo";
import SideBar from "../../components/SideBar/SideBar";

export default function EventName() {
  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100">
          <div>
            <div>{/* componente breadcrumbs */}</div>
            <div>
              <EventInfo />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
              <CardEvent title="Orçamento" description="Faça o planejamento de custos" cardImage="paid"/>
              <CardEvent title="Convidados" description="Gerencie seus convidados" cardImage="group"/>
              <CardEvent title="Tarefas" description="Crie tarefas" cardImage="check_circle"/>
          </div>
        </div>
      </div>
    </>
  );
}
