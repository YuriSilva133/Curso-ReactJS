import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho'
import axios from 'axios';
import CartaoOmdb from '../../components/cartaoOmdb';

export default function ChamadaApi() {

    const [cep, setCep] = useState('')
    const [infoLogradouro, setInfoLogradouro] = useState('')

    const [filmeBusca, setFilmeBusca] = useState('')
    const [listaFilmes, setListaFilmes] = useState([])


    //let ObdbKey = '645b5f1d'

    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/'

        let resp = await axios.get(url);
        let dados = resp.data

        let msg = dados.logradouro + ', ' + dados.bairro + ', ' + dados.localidade + '/' + dados.uf

        setInfoLogradouro(msg)
    }

    async function buscarFilme() {
        let url = 'http://www.omdbapi.com/?apikey=645b5f1d&s=' + filmeBusca;

        let resp = await axios.get(url)
        let dados = resp.data
        
        if (dados.Response == 'False') {
            alert('Nenhum filme encontrado')
            return;
        }

        let filmesEncontrados = dados.Search
        setListaFilmes(filmesEncontrados)
    }

    return (
        <div className='pagina-chamada-api pagina' >
            <Cabecalho titulo='ReactJS | Chamada APIs' />

            <div className="secao omdb">
                <h1>API Omdb</h1>

                <div className="entradas">
                    <input type="text" placeholder='Nome do filme' value={filmeBusca} onChange={e => setFilmeBusca(e.target.value)} />
                    <button onClick={buscarFilme}>Buscar</button>
                </div>
                
                <div className='lista-filmes'> 
                    
                    {listaFilmes.map(item => 
                        <CartaoOmdb item={item} />
                    )}
                </div>

                {
                    /* <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Filme</th>
                                <th>Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaFilmes.map(item =>
                                <tr>
                                    <td>{item.imdbID}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Year}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table> */
                }

            </div>

            <div className='secao'>
                <h1> API do Correio</h1>

                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={e => setCep(e.target.value)} />
                    <button onClick={buscarCEP}> Buscar </button>
                </div>

                <div className='correio'>
                    <p>
                        {infoLogradouro}
                    </p>
                </div>

            </div>
        </div>
    )
}