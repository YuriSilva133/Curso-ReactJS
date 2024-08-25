import './index.scss'

export default function Eventos() {
    function clicou() {
        alert('O usuario clicou!')
    }
    
    function moveu() {
        alert('mouse passou!')
    }

    function alterou(e) {
        //target = elemento que foi alterado "input"
        //value = valor alterado
        let novoValor = e.target.value //string
        alert('valor alterado para: ' + novoValor)
    }

    function alterouCkeck(e) {
        let novoValor = e.target.checked; //boolean
        alert('[Chekbox/radio] alterado para: ' + novoValor)
    }

    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>reactJS | Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p onMouseMove={moveu}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, dolores, in quasi sint alias nisi, architecto harum maxime eligendi pariatur quae minus quos quisquam? Iste veritatis error consectetur blanditiis reiciendis.</p>

                <input onChange={alterou} type="text" placeholder='Digite aqui alguma coisa' />

                <textarea onChange={alterou} placeholder='Digite aqui'>
                </textarea>

                <select onChange={alterou}>
                    <option>Selecione</option>
                    <option>item A</option>
                    <option>item B</option>
                </select>

                <div className='grupo'>
                    <input onChange={alterouCkeck} type="checkbox" name="" id="" /> Opção 1
                    <input type="checkbox" name="" id="" /> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' /> Opção 1
                    </div>
                    <div>
                        <input type="radio" name='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={clicou}>Clique aqui</button>

            </section>
        </div>
    )
}