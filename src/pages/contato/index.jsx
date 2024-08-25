import './index.scss'

import { Link } from "react-router-dom";

import Cabecalho from '../../components/cabecalho'

export default function Contato() {
    return (
        <div className='pagina-contato pagina'>
                
                <Link to={'/'}>
                    <Cabecalho />
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>

            <section className='secao'>
                <img className='icone' src="/assets/images/contato.png" alt="icone de contato" />
            </section>
        </div>
    )
}