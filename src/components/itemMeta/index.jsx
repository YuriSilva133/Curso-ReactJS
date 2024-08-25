import './index.scss'

export default function ItemMeta(props) {

    return (
        <li className='comp-item-meta'>
            <i class="fa-solid fa-pen-to-square" onClick={() => props.alterarMeta(props.pos)}></i> &nbsp;
            <i class="fa-solid fa-xmark" onClick={() => props.removerMeta(props.pos)} ></i> &nbsp;
            {props.item}
        </li>
    )
}