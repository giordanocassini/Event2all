import EventButton from "../../components/EventButton";
import SideBar from "../../components/SideBar/SideBar";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="dashboard vh-100 m-4">
          <div className="empty-dash">
            <div className="text-dash">
              <p>Voce não possui um evento criado.</p>
              <h3>Clique no botão para adicionar um novo evento.</h3>
            </div>
            <div className="button-event">
              <EventButton />
            </div>
          </div>
          <div className="image-dash">
            <img src={"/images/festa2.png"} />
          </div>
        </div>
      </div>
    </>
  );
}
