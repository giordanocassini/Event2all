import FormSignUp from "../../components/FormSignUp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <>
      <Header />
      <FormSignUp />
      <Footer 
      backgroundColor="#E5E5E5" 
      color="#000000" 
      logotipo="logotipo.png"
      position="static" />
    </>
  );
}
