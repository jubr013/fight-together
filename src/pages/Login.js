import { Button } from "@mui/material";

export function Login() {
  return (
    <>
      <div className="login">
        <img src="images/login.svg" alt="rounded profile" />
        <h1> Change The World!</h1>
        <p>Realize o seu login através de sua conta Google <br/>
          e comece a transformar o mundo em um lugar melhor!</p>
        <Button color="success" variant="contained">Prosseguir</Button>
      </div>
    </>
  );
}
