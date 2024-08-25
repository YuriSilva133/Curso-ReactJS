import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';


export default function App() {
  return (
    <div className="pagina-app pagina">

      <Cabecalho titulo="Estudando React JS!!!" />

      <section className='secao'>
        <h1>Minha pagina!</h1>
        <ul>
          <li>
            <Link to='/contato'>Ir para Contato </Link>
          </li>
          <li>
            <Link to='/eventos'>Ir para Eventos </Link>
          </li>
          <li>
            <Link to='/varestado'>Ir para Variavel de Estado </Link>
          </li>
          <li>
            <Link to='/componentes'>Ir para Componentes </Link>
          </li>
          <li>
            <Link to='/rendecond'>Ir para Renderização Condicional</Link>
          </li>
          <li>
            <Link to='/efeitos'>Ir para efeitos</Link>
          </li>
          <li>
            <Link to='/chamadaApi'>Ir para Chamada API</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
