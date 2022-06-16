import { Button } from "@mui/material";
import './style.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <img src="images/login.svg" alt="rounded profile" />
        <h1> Change the World!</h1>
        <p>
          Realize o seu login através de sua conta Google
          e comece a transformar o mundo em um lugar melhor!
        </p>
        <button className="button-success" variant="contained">Prosseguir</button>
      </div>
    </>
  );
}

export default Login
