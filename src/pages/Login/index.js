import { Link } from 'react-router-dom'
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
        <Link to="incidents" className="button-success" variant="contained">Prosseguir</Link>
      </div>
    </>
  );
}

export default Login
