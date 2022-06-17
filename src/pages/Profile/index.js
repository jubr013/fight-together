import './style.css';

const Profile = () => {
  return (
    <>
      <div class="row">
        <div class="column1">
          <div className="perfil_name">
            <img src="images/profilepic.svg" alt="" />
            <h3>Olá, </h3>
            <h3> Malenia</h3>
            <img src="images/verified.svg" alt="" />            
          </div>
          <div className="dados">
            <h3>Dados Pessoais</h3>
            <div>
              <h5>Nome</h5>
              <p>Malenia Haligtree</p>
              <hr />
            </div>

            <div>
              <h5>E-mail</h5>
              <p>malenia_bladeofmiquella@gmail.com</p>
              <hr />
            </div>

            <div>
              <h5>Celular</h5>
              <p>(11) 99232-7701</p>
              <hr />
            </div>
          </div>
          <div className="status">
            <h3>Status</h3>
            <div>
              <h5>Título</h5>
              <p style={{ color: '#75B2D4CC' }}>Protetor da Natureza</p>
            </div>
            <div>
              <h5>Incidentes Registrados</h5>
              <p style={{ color: '#82D475CC' }}>27</p>
            </div>
            <div>
              <h5>Incidentes Denunciados</h5>
              <p style={{ color: '#D47592CC' }}>3</p>
            </div>
            <button a="" className="button-leave" variant="contained">
              Sair
            </button>
          </div>
        </div>

        <div class="column2">
          <h2>Column 2</h2>
        </div>
      </div>

      {/* <div className="full">
        <section className="perfil">
          
          
          
        </section>
        <div>oi</div>
      </div> */}
    </>
  );
};

export default Profile;
