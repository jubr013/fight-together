import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'
import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore"
import { Link } from 'react-router-dom';

const Incidente = () => {
  const [incidentes, setIncidentes] = useState([]);
  const [incident, setIncident] = useState({});
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const [imageURL, setImageURL] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('queimada');

  useEffect(() => {
    getIncidentes();
  }, []);

  const getIncidentes = async () => {
    const ocorrenciasCollection = collection(database, "ocorrencias");

    const docOcorrencias = await getDocs(ocorrenciasCollection);
 
    const ocorrencias = docOcorrencias.docs.map(ocorrencia => {
      const ocorrence = { 
        id: ocorrencia.id,
        ...ocorrencia.data() 
      }

      return ocorrence;
    });

    setIncidentes(ocorrencias);
  }

  const handleAddIncident = async (e) => {
    e.preventDefault();

    const data = {
      author: 'Web User',
      title,
      description,
      location,
      type,
      picture: imageURL
    }

    const ocorrenciasCollection = collection(database, "ocorrencias");

    await addDoc(ocorrenciasCollection, data).then((response) => {
      getIncidentes();
      setShowModalAdd(false);
      alert('Dados salvos com sucesso.')
    });
  }

  const handleClickCard = (event, incident) => {
    event.preventDefault();
    setShowModalDetail(true);
    setShowModalAdd(false);
    setIncident(incident);
    console.log(incident)
  }


  const handleModalClose = () => {
    setShowModalAdd(false);
    setShowModalDetail(false);
    setIncident({});
  }

  return(
    <>
      <section className="incidente">
        <div className="header-incidente">
          <MenuIcon />
          <Link to="/profile">Perfil</Link>
        </div>

        <div className="wrapper-cards">
          {incidentes.length > 0 && incidentes.map(incidente => (
              <div onClick={e => handleClickCard(e, incidente)} key={incidente.id} className="card">
                <img src={incidente.picture} alt="Foto do incidente" />

                <div className="card-info">
                  <h4>{incidente.title}</h4>
                  <p>Postado por: {incidente.author}</p>
                </div>
              </div>
            ))}
        </div>

        <button onClick={e => setShowModalAdd(true)} className="more-incidents">+</button>
      </section>

      {
        showModalAdd && (
          <section className="modal-layer">
            <div className="modal">
              <div className="modal-header">
              <h1>Novo incidente</h1>
              <button onClick={handleModalClose}>x</button>
              </div>
              <form>
                <input type="text" value={imageURL} onChange={e => setImageURL(e.target.value)} id="image" placeholder="URL da imagem" />

                <input type="text" value={title} onChange={e => setTitle(e.target.value)} id="title" placeholder="Título" />

                <select name="type" id="type" value={type} onChange={e => setType(e.target.value)}>
                  <option value="queimada">Queimada</option>
                  <option value="alagamento">Alagamento</option>
                  <option value="animais">Animais abandonados</option>
                  <option value="desperdicio">Desperdício de comida</option>
                </select>

                <input type="text" placeholder="Localização" value={location} onChange={e => setLocation(e.target.value)}/>

                <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" id="description" cols="30" rows="10" placeholder="Descrição"></textarea>

                <button onClick={handleAddIncident}>Salvar</button>
              </form>
            </div>
          </section>
        )
      }

      {
        showModalDetail && (
          <section className="modal-layer">
            <div className="modal">
              <div className="modal-header">
              <h1>Detalhe do incidente</h1>
              <button onClick={handleModalClose}>x</button>
              </div>
              <form>
                <img src={incident.picture} alt={incident.title}/>

                <input type="text" value={incident.title} readOnly/>

                <select name="type" id="type" value={incident.type} readOnly>
                  <option value="queimada">Queimada</option>
                  <option value="alagamento">Alagamento</option>
                  <option value="animais">Animais abandonados</option>
                  <option value="desperdicio">Desperdício de comida</option>
                </select>

                <input type="text" placeholder="Localização" value={incident.location} readOnly/>

                <textarea readOnly value={incident.description} name="description" id="description" cols="30" rows="10" placeholder="Descrição"></textarea>

                <button onClick={handleModalClose}>Fechar</button>
              </form>
            </div>
          </section>
        )
      }
    </>
  )
}

export default Incidente;