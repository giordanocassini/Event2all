import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./breadCrumbs.scss";

type Item = {
    name: string,
    link: string
}

type BreadProps = {
    items: Item[]
};


export default function BreadCrumbs(props: BreadProps) {
  return (
    <div className="header-link">
        <Breadcrumb>
        {props.items.map((item) =>(
            <Breadcrumb.Item>
                <Link className="header-font" to={item.link}>{item.name}</Link>
            </Breadcrumb.Item>
        ))}
        </Breadcrumb>
    </div>
  );
}
