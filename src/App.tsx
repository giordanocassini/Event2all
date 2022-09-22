// import { useState } from "react";
//import FormLogin from "./components/FormLogin/FormLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import FormLogin from "./components/FormLogin";
import Header from "./components/Header";
import FormSignUp from "./components/FormSignUp";

function App() {
  return (
    <>
      {<Header />}
      <FormSignUp />
      {/* <FormLogin/> */}
    </>
  );
}

export default App;
