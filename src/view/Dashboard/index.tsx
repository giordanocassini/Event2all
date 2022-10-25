import { useState } from "react";
import EventButton from "../../components/EventButton";
import SideBar from "../../components/SideBar/SideBar";
import "./Dashboard.scss";


export default function Dashboard() {
  const [events, setEvents] = useState<any[]>([]);
  return (
    <>
      <div className="d-flex">
        
        <SideBar />
        <div className="dashboard vh-100 w-100 ">
          <div className="text-dash d-flex justify-content-around align-items-center m-4 mt-5">
              <h3 className="mt-4 w-50">
                Clique no botão para adicionar um novo evento.
              </h3>
            <div className="m-4">
              <EventButton setEvents={setEvents} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <img src={"/images/festa2.png"} />
          </div>
        </div>
      </div>
    </>
  );
}
