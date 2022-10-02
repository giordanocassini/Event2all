import EventButton from "../../components/EventButton";
import SideBar from "../../components/SideBar/SideBar";


export default function Dashboard () {
    return (
      <>
      <div className="h-100 d-flex">
          <SideBar />
          <div className="vh-100 d-flex">
            <EventButton />
          </div>
      </div>
      
      </>
    );
  }