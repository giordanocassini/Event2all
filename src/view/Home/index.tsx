import Footer from "../../components/Footer";
import HeaderHome from "../../components/HeaderHome";
import HomeSite from "../../components/HomeSite";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <HomeSite />
      <div className="">
        <Footer
          backgroundColor="#191933"
          color="#FBFBFB"
          logotipo="logotipo2.png"
          position="static"
        />
      </div>
    </>
  );
}
