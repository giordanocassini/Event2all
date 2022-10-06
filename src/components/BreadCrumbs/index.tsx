import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./breadCrumbs.scss";

export default function BreadCrumbs() {
  return (
    <div className="header-link">
      <Breadcrumb >
        <Breadcrumb.Item>
          <Link className="header-font" to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link className="header-font" to={"/dashboard"}>Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link className="header-font" to={"/evento"}>Nome do Evento</Link>
        {/*   vai ter que puxar o nome do evento da API */}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
