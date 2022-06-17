import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './styles.css'
import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';
import { collection, getDocs } from "firebase/firestore"

const Incidente = () => {
  const [incidentes, setIncidentes] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);

  useEffect(() => {
    getIncidentes();
  }, []);

  const getIncidentes = async () => {
    const ocorrenciasCollection = collection(database, "ocorrencias");

    const docOcorrencias = await getDocs(ocorrenciasCollection);
 
    const ocorrencias = docOcorrencias.docs.map(ocorrencia => ocorrencia.data());

    setIncidentes(ocorrencias);
  }

  const handleAddIncident = async () => {

  }

  return(
    <>
      <section className="incidente">
        <div className="header-incidente">
          <MenuIcon />
          <FilterAltIcon />
        </div>

        <div className="wrapper-cards">
          {incidentes.length > 0 && incidentes.map(incidente => (
              <div key={incidente.id} className="card">
                <img src={incidente.picture} alt="Foto do incidente" />

                <div className="card-info">
                  <h4>{incidente.title}</h4>
                  <p>Postado por: {incidente.author}</p>
                </div>
              </div>
            ))}
        </div>
        <button onClick={e => setShowModalAdd(true)} className="mais-incidentes">+</button>
      </section>

      {
        showModalAdd && (
          <section className="modal-layer">
            <div className="layer-header">
              <button onClick={e => setShowModalAdd(false)}>x</button>
            </div>

            <div className="modal">
              <h1>Testes</h1> 
            </div>
          </section>
        )
      }
    </>
  )
}

export default Incidente;