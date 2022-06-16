import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './styles.css'
import { useEffect, useState } from 'react';
import { database } from '../../services/firebase';
import { collection, getDocs } from "firebase/firestore"

const Incidente = () => {
  const [incidentes, setIncidentes] = useState([]);

  useEffect(() => {
    getIncidentes();
    console.log(incidentes)
  }, [])

  const getIncidentes = async () => {
    const ocorrenciasCollection = await collection(database, "ocorrencias");

    const docOcorrencias = await getDocs(ocorrenciasCollection);

    const ocorrencias = docOcorrencias.docs.map(ocorrencia => ocorrencia.data());

    setIncidentes(...ocorrencias);
  }

  return(
    <section className="incidente">
      <div className="header-incidente">
        <MenuIcon />
        <FilterAltIcon />
      </div>
      <button className="mais-incidentes">+</button>
    </section>
  )
}

export default Incidente;