import Footer from "../../components/Footer";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";

export default function Login() {
  return (
    <>
      <Header />
      <FormLogin />
      <Footer
        backgroundColor="#E5E5E5"
        color="#000000"
        logotipo="logotipo.png"
      />
    </>
  );
}
