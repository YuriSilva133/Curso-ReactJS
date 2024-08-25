import './index.scss'
import { useState } from 'react'

import { tratarNumero } from '../../utils/conversao.js'

import { calcularTotalingresso } from '../../services/ingresso.js'

import Cabecalho from '../../components/cabecalho/index.jsx'

export default function VarEstado() {
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [titulos2, setTituloS2] = useState('Ola')
    const [titulos3, setTituloS3] = useState('Selecione uma opção')
    const [marcouOpcaoS4, setTituloS4] = useState(true)
    const [tituloS5, setTituloS5] = useState('oie')
    const [descricaoS5, setDescricaoS5] = useState('oie')

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const [qtdIng, setQtdIng] = useState(0);
    const [meioIng, setMeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([])
    const [editando, setEditando] = useState(-1)

    const [plano, setPlano] = useState('')
    const [situacao, setSituacao] = useState('')
    const [cor, setCor] = useState('')
    const [listaPlanos, setListaPlanos] = useState([])

    function aumentar() {
        //contador++
        if (contador < 10) {
            setContador(contador + 1)
        }
        //alert(contador)
    }

    function diminuir() {
        //contador--
        if (contador > 0) {
            setContador(contador - 1)
        }
        //alert(contador)
    }

    function teclaApertada(e) {
        if (e.key === 'Enter') {
            adicionarMeta()
        }
    }

    function calcularIngresso() {
        let tot = calcularTotalingresso(qtdIng, meioIng, cupom)

        setTotalIng(tot)
    }

    function Somar() {
        let soma = tratarNumero(num1) + tratarNumero(num2)
        setRes(soma)
    }

    function adicionarMeta() {
        //listaMetas.push(novaMeta)
        if (novaMeta !== '') {
            if (editando === -1) {
                //alert('adicionado')
                setListaMetas([...listaMetas, novaMeta])
                setNovaMeta('')
            }
            else {
                //alert('editando')
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas])
                setNovaMeta('')
                setEditando(-1)
            }
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1)
        setListaMetas([...listaMetas])
    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos])
        setEditando(pos)
    }

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])

        setPlano('')
        setSituacao('')
        setCor('')
    }

    console.log(listaPlanos);

    return (
        <div className='pagina-varestado pagina'>
            <Cabecalho />

            <div className='secao planos'>
                <h1> Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='situação atual' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}>Adicionar Plano</button>
                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.tema }}> &nbsp;</div>
                            <div>
                                <h1> {item.titulo} </h1>
                                <h2> {item.tempo} </h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='secao metas'>
                <h1>Metas para os proximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}> Adicionar </button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <li key={pos}>
                            <i class="fa-solid fa-pen-to-square" onClick={() => alterarMeta(pos)}></i> &nbsp;
                            <i class="fa-solid fa-xmark" onClick={() => removerMeta(pos)} ></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            <div className='secao ingresso'>
                <h1>Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade:</label>
                        <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
                    </div>
                    <div>
                        <label>Meia Entrada:</label>
                        <input type="checkbox" checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
                    </div>

                    <div>
                        <label>Cupom:</label>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>

                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>

                    <hr />
                    <div>
                        O total é R$ {totalIng.toFixed(2)}
                    </div>
                </div>
            </div>

            <div className='secao calculadora'>
                <h1>Calculadora</h1>

                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>

                <br />
                <button onClick={Somar}>Somar</button>
            </div>

            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>
            </div>

            <div className='secao'>
                <h1>{titulos2}</h1>
                <input type="text" value={titulos2} onChange={e => setTituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{titulos3}</h1>

                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione Uma opção</option>
                    <option>JavaScript</option>
                    <option>Html</option>
                    <option>CSS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é legal? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" checked={marcouOpcaoS4} onChange={e => setTituloS4(e.target.checked)} /> Programar é legal?
            </div>

            <div className='secao'>
                <h1> {tituloS5} </h1>

                <input onChange={e => setDescricaoS5(e.target.value)} type="text" value={descricaoS5} />

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>
        </div>
    )
}