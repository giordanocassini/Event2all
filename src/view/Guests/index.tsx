import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import SideBar from "../../components/SideBar/SideBar";
//import "./eventName.scss";
export default function Guests() {

  const breadCrumbsItem = [
    { name: 'Home', link:'/' },
    { name: 'Nome do Evento', link:'/evento' },
    { name: 'Convidados', link:'/convidados' }
  ]

  return (
    <>
      <div className="h-100 d-flex">
        <SideBar />
        <div className="w-100 vh-100">
          <div>
            <div> 
              <BreadCrumbs items={breadCrumbsItem}/>
            </div>
            <div>
                {/* Add cards de resumo dos convidados */}
            </div>
            <div>
                {/* Add lista dos convidados */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
